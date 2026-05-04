import { connectDB } from "@/lib/db/connect";
import DashboardConfig from "@/lib/models/dashboard.model";

export async function GET() {
  await connectDB();

  let config = await DashboardConfig.findOne();

  // 🔥 Create default config if not exists
  if (!config) {
    config = await DashboardConfig.create({
      revenue: 3000,
      users: 1000,
      orders: 200,
      widgets: [
        { key: "revenue", label: "Revenue" },
        { key: "users", label: "Users" },
        { key: "orders", label: "Orders" },
      ],
    });
  }

  return Response.json(config);
}

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  let config = await DashboardConfig.findOne();

  if (!config) {
    config = await DashboardConfig.create(body);
  } else {
    config.revenue = body.revenue;
    config.users = body.users;
    config.orders = body.orders;

    // allow widget config update too
    if (body.widgets) {
      config.widgets = body.widgets;
    }

    await config.save();
  }

  return Response.json({ success: true });
}