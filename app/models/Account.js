import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    provider: String, 
    providerAccountId: String, 
    access_token: String,
    refresh_token: String,
    token_type: String,
    expires_at: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Account || mongoose.model("Account", accountSchema);
