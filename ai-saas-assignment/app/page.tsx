import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        AI SaaS Dashboard 🚀
      </h1>

      <div style={{ display: "flex", gap: "15px" }}>
        
        <Link href="/dashboard">
          <button style={btnStyle}>Dashboard</button>
        </Link>

        <Link href="/chat">
          <button style={btnStyle}>Chat</button>
        </Link>

        <Link href="/admin?role=admin">
          <button style={btnStyle}>Admin</button>
        </Link>

      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  background: "#6366f1",
  color: "white",
  cursor: "pointer",
};