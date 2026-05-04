import { useMutation } from "@tanstack/react-query";

type ChatResponse = {
  reply: string;
};

export function useChat() {
  return useMutation<ChatResponse, Error, string>({
    mutationFn: async (message: string) => {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message }),
      });

      return res.json();
    },
  });
}