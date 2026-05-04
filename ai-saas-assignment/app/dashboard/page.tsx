"use client";

import useDashboard from "@/hooks/useDashboard";

export default function DashboardPage() {
  const { data } = useDashboard();

  if (!data) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">AI SaaS Dashboard 🚀</h1>

      <div className="flex gap-6">
        {data.widgets.map((widget: any, i: number) => (
          <div
            key={i}
            className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl w-64"
          >
            <p>{widget.label}</p>

            <h2 className="text-2xl">
              {widget.key === "revenue" && `₹${data.revenue}`}
              {widget.key === "users" && data.users}
              {widget.key === "orders" && data.orders}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}