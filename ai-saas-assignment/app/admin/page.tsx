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

  useEffect(() => {
    const data = localStorage.getItem("dashboardData");
    if (data) {
      const parsed = JSON.parse(data);
      setRevenue(parsed.revenue || "");
      setUsers(parsed.users || "");
      setOrders(parsed.orders || "");
    }
  }, []);

  if (role !== "admin") {
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
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Admin Panel ⚙️
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <input
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          placeholder="Revenue"
          style={inputStyle}
        />

        <input
          value={users}
          onChange={(e) => setUsers(e.target.value)}
          placeholder="Users"
          style={inputStyle}
        />

        <input
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