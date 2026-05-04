"use client";

import { useState } from "react";
import { useChat } from "@/hooks/useChat";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);

  const mutation = useChat();

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user" as const, text: input };

    setMessages((prev) => [...prev, userMsg]);

    mutation.mutate(input, {
      onSuccess: (data) => {
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: data.reply },
        ]);
      },
    });

    setInput("");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg,#020617,#0f172a)",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid #1e293b",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        🤖 AI Chat Assistant
      </div>

      {/* CHAT AREA */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {messages.length === 0 && (
          <p style={{ opacity: 0.5 }}>Start a conversation...</p>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent:
                msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                padding: "12px 16px",
                borderRadius: "14px",
                maxWidth: "65%",
                fontSize: "14px",
                lineHeight: "1.5",
                background:
                  msg.role === "user"
                    ? "linear-gradient(135deg,#3b82f6,#9333ea)"
                    : "#1e293b",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT BAR */}
      <div
        style={{
          display: "flex",
          padding: "16px",
          borderTop: "1px solid #1e293b",
          gap: "10px",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            background: "#020617",
            color: "white",
            border: "1px solid #334155",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "14px 24px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg,#3b82f6,#9333ea)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}