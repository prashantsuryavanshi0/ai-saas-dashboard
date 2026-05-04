"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  // Load saved data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dashboard") || "{}");
    if (data) {
      setRevenue(data.revenue || "");
      setUsers(data.users || "");
      setOrders(data.orders || "");
    }
  }, []);

  const handleSave = () => {
    const data = {
      revenue,
      users,
      orders,
    };

    localStorage.setItem("dashboard", JSON.stringify(data));

    alert(`Saved:
Revenue: ${revenue}
Users: ${users}
Orders: ${orders}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ color: "#fff" }}>⚙️ Admin Panel</h2>

        <input
          type="number"
          placeholder="Revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Users"
          value={users}
          onChange={(e) => setUsers(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
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
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "16px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "#e5e7eb",
    color: "#000", // 🔥 FIXED
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #6366f1, #9333ea)",
    color: "#fff",
    cursor: "pointer",
  },
};