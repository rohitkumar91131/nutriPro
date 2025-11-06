import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true, required: true },
    image: String,
    password: String, // sirf credentials login ke liye
    emailVerified: Date,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
