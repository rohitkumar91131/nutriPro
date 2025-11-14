import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import Food from "../../../models/Food";
import connectDB from "../../../lib/mongodb";

export async function GET() {    

  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(
      JSON.stringify({ message: "Unauthorized" }),
      { status: 401 }
    );
  }

  try {
    await connectDB();

    const foods = await Food.find({ user: session.user.id })
      .sort({ createdAt: -1 });

    return new Response(
      JSON.stringify({ foods }),   
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 500 }
    );
  }
}
