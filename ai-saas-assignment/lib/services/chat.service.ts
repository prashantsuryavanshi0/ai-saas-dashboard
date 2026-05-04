import { connectDB } from "../db/connect";
import { Conversation } from "../models/conversation.model";

export async function sendChatMessage(message: string, projectId: string) {
  await connectDB();

  // 🔥 Replace with OpenAI if needed
  const reply = `AI: ${message}`;

  let convo = await Conversation.findOne({ projectId });

  if (!convo) {
    convo = await Conversation.create({ projectId, messages: [] });
  }

  convo.messages.push({ role: "user", text: message });
  convo.messages.push({ role: "bot", text: reply });

  await convo.save();

  return { reply };
}