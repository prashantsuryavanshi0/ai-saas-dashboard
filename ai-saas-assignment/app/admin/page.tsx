"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  const [message, setMessage] = useState("");

  // ✅ Check role from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const role = params.get("role");

    if (role === "admin") {
      setIsAdmin(true);
    }
  }, []);

  // ✅ Save data to API
  const handleSave = async () => {
    try {
      const res = await fetch("/api/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          revenue: Number(revenue),
          users: Number(users),
          orders: Number(orders),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Data saved successfully!");
      } else {
        setMessage("❌ Failed to save data");
      }
    } catch (error) {
      setMessage("❌ Error occurred");
    }
  };

  // ❌ Not admin
  if (!isAdmin) {
    return (
      <div style={{ color: "white", padding: "40px" }}>
        ❌ Access Denied (Admin only)
      </div>
    );
  }

  // ✅ Admin Panel UI
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Admin Panel
      </h1>

      <input
        type="number"
        placeholder="Revenue"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          padding: "10px",
          width: "250px",
        }}
      />

      <input
        type="number"
        placeholder="Users"
        value={users}
        onChange={(e) => setUsers(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          padding: "10px",
          width: "250px",
        }}
      />

      <input
        type="number"
        placeholder="Orders"
        value={orders}
        onChange={(e) => setOrders(e.target.value)}
        style={{
          display: "block",
          marginBottom: "20px",
          padding: "10px",
          width: "250px",
        }}
      />

      <button
        onClick={handleSave}
        style={{
          padding: "10px 20px",
          background: "purple",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        Save
      </button>

      {message && (
        <p style={{ marginTop: "15px" }}>
          {message}
        </p>
      )}
    </div>
  );
}
       