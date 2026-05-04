import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <h1 className="text-4xl font-bold mb-4 text-center">
        AI SaaS Dashboard
      </h1>

      <p className="text-gray-400 mb-8">
        Build, analyze and chat with AI 🚀
      </p>

      <div className="flex gap-4">
        <Link href="/dashboard">
          <button className="px-6 py-3 rounded-lg bg-blue-600">
            Dashboard
          </button>
        </Link>

        <Link href="/chat">
          <button className="px-6 py-3 rounded-lg bg-purple-600">
            Chat
          </button>
        </Link>
      </div>
    </div>
  );
}