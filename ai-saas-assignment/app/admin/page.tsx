"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);

  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  useEffect(() => {
    setMounted(true);

    const data = localStorage.getItem("dashboardData");
    if (data) {
      const parsed = JSON.parse(data);
      setRevenue(parsed.revenue || "");
      setUsers(parsed.users || "");
      setOrders(parsed.orders || "");
    }
  }, []);

  if (!mounted) return null;

  const isAdmin =
    typeof window !== "undefined" &&
    window.location.search.includes("role=admin");

  if (!isAdmin) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        ❌ Access Denied
      </div>
    );
  }

  const handleSave = () => {
    localStorage.setItem(
      "dashboardData",
      JSON.stringify({ revenue, users, orders })
    );
    alert("Saved Successfully ✅");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "10px",
          width: "320px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Admin Panel ⚙️</h1>

        <input
          type="text"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          placeholder="Revenue"
          style={inputStyle}
        />

        <input
          type="text"
          value={users}
          onChange={(e) => setUsers(e.target.value)}
          placeholder="Users"
          style={inputStyle}
        />

        <input
          type="text"
          value={orders}
          onChange={(e) => setOrders(e.target.value)}
          placeholder="Orders"
          style={inputStyle}
        />

        <button onClick={handleSave} style={btnStyle}>
          Save
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "none",
  outline: "none",
  color: "black",
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  background: "#3b82f6",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
};