import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ["admin", "member"], default: "member" },
  projectId: mongoose.Schema.Types.ObjectId,
});

export const User =
  mongoose.models.User || mongoose.model("User", schema);