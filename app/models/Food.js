import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  quantity: { type: String, required: true },
  calories: { type: Number, required: true },
  price: { type: Number, required: true },
  notes: { type: String },
  aiRating: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);
export default Food;
