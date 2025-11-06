import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import User from "../../../models/User";
import connectDB from "../../../lib/mongodb";

export const authOptions = {
  adapters: MongoDBAdapter(connectDB),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "login",
      name: "login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorizing user with email:", credentials.email);
        
        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
callbacks: {
  async signIn({ user, account, profile }) {
    console.log("Sign-in from:", account.provider);
    return true;
  },
  async jwt({ token, user }) {
    if (user) token.id = user.id; 
    return token;
  },
  async session({ session, token }) {
    // use token.id, not user.id
    session.user.id = token.id;
    return session;
  },
},

  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
