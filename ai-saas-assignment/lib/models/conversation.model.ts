import mongoose from "mongoose";

const schema = new mongoose.Schema({
  projectId: mongoose.Schema.Types.ObjectId,
  messages: [
    {
      role: String,
      text: String,
    },
  ],
});

export const Conversation =
  mongoose.models.Conversation ||
  mongoose.model("Conversation", schema);