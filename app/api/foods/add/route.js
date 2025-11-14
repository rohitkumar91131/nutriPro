import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import connectDB from "../../../lib/mongodb";
import Food from "../../../models/Food";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();

    const newFood = await Food.create({
      foodName: body.foodName,
      quantity: body.quantity,
      calories: body.calories,
      price: body.price,
      notes: body.notes,
      user: session.user.id,
    });

    return NextResponse.json({
      message: "Food added successfully",
      food: newFood,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
