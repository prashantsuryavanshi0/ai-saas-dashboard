"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function AdminPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔒 Admin Protection
  if (role !== "admin") {
    return (
      <div style={{ color: "white", padding: "40px" }}>
        ❌ Access Denied (Admin only)
      </div>
    );
  }

  // 📥 Fetch existing data (important for assignment)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();

        setRevenue(data.revenue?.toString() || "");
        setUsers(data.users?.toString() || "");
        setOrders(data.orders?.toString() || "");
      } catch (err) {
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 💾 Save data
  const handleSave = async () => {
    try {
      await fetch("/api/admin", {
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

      alert("Saved successfully 🚀");
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  if (loading) {
    return (
      <div style={{ color: "white", padding: "40px" }}>
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #020617, #020617)",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Admin Panel ⚙️
      </h1>

      {/* Revenue */}
      <input
        placeholder="Revenue"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "12px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #444",
          background: "#1f2937",
          color: "white",
        }}
      />

      {/* Users */}
      <input
        placeholder="Users"
        value={users}
        onChange={(e) => setUsers(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "12px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #444",
          background: "#1f2937",
          color: "white",
        }}
      />

      {/* Orders */}
      <input
        placeholder="Orders"
        value={orders}
        onChange={(e) => setOrders(e.target.value)}
        style={{
          display: "block",
          marginBottom: "20px",
          padding: "12px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #444",
          background: "#1f2937",
          color: "white",
        }}
      />

      {/* Save Button */}
      <button
        onClick={handleSave}
        style={{
          padding: "12px 24px",
          background: "linear-gradient(to right, #6366f1, #a855f7)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </div>
  );
}