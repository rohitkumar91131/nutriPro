import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";


export async function POST(request) {
  await connectDB();

  const { email, password } = await request.json();

  if (!email || !password)
    return new Response(JSON.stringify({ error: "Email and password required" }), { status: 400 });

  const user = await User.findOne({ email });
  if (!user)
    return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });

  if (user.password !== password)
    return new Response(JSON.stringify({ error: "Invalid password" }), { status: 401 });

  return new Response(JSON.stringify(user), { status: 200 });
}
