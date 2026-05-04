"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function AdminPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("dashboardData");
    if (saved) {
      const data = JSON.parse(saved);
      setRevenue(data.revenue || "");
      setUsers(data.users || "");
      setOrders(data.orders || "");
    }
  }, []);

  // Admin check
  if (role !== "admin") {
    return (
      <div style={{ color: "white", padding: "40px" }}>
        ❌ Access Denied (Admin only)
      </div>
    );
  }

  // Save data
  const handleSave = () => {
    localStorage.setItem(
      "dashboardData",
      JSON.stringify({
        revenue,
        users,
        orders,
      })
    );
    alert("✅ Data Saved!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "20px" }}>
          Admin Panel ⚙️
        </h2>

        <input
          placeholder="Revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Users"
          value={users}
          onChange={(e) => setUsers(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Orders"
          value={orders}
          onChange={(e) => setOrders(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleSave} style={buttonStyle}>
          Save Data 🚀
        </button>
      </div>
    </div>
  );
}

// styles
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #374151",
  background: "#1f2937",
  color: "white",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(90deg, #6366f1, #a855f7)",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};