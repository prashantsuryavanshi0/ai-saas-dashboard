"use client";

import { useState } from "react";

export default function AdminPage() {
  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  const handleSave = () => {
    alert("Saved successfully 🚀");
    console.log({ revenue, users, orders });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#020617",
      }}
    >
      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "12px",
          width: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>
          ⚙️ Admin Panel
        </h1>

        <input
          type="text"
          placeholder="Revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <input
          type="text"
          placeholder="Users"
          value={users}
          onChange={(e) => setUsers(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <input
          type="text"
          placeholder="Orders"
          value={orders}
          onChange={(e) => setOrders(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <button
          onClick={handleSave}
          style={{
            padding: "10px",
            background: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}