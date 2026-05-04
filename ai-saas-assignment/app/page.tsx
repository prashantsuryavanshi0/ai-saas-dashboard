export default function Home() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
      color: "white"
    }}>
      <h1>AI SaaS Dashboard 🚀</h1>

      <div style={{ marginTop: "20px" }}>
        <a href="/dashboard">
          <button>Dashboard</button>
        </a>

        <a href="/chat">
          <button>Chat</button>
        </a>

        <a href="/admin?role=admin">
          <button>Admin</button>
        </a>
      </div>
    </div>
  );
}