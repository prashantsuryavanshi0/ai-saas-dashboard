import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  slug: { type: String, unique: true },
});

export const Project =
  mongoose.models.Project || mongoose.model("Project", schema);