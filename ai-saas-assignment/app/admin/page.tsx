"use client";

import { useState } from "react";

export default function AdminPage() {
  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  const handleSave = () => {
    alert(`Saved:
Revenue: ${revenue}
Users: ${users}
Orders: ${orders}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>⚙️ Admin Panel</h1>

        <input
          type="text"
          placeholder="Revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Users"
          value={users}
          onChange={(e) => setUsers(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Orders"
          value={orders}
          onChange={(e) => setOrders(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSave} style={styles.button}>
          Save
        </button>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },
  card: {
    background: "#111827",
    padding: "30px",
    borderRadius: "16px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
  title: {
    color: "white",
    textAlign: "center",
    marginBottom: "10px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "#ffffff",
    color: "#000000", // ✅ FIXED (visible typing)
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};