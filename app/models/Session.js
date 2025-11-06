import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    sessionToken: { type: String, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    expires: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Session || mongoose.model("Session", sessionSchema);
