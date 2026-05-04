# 🚀 AI SaaS Dashboard

A full-stack AI SaaS dashboard built using Next.js, MongoDB, and OpenAI API.
This project includes an admin panel, a config-driven dashboard, and a real AI-powered chat interface.

---

## 🔗 Routes

- **Home:** `/`
- **Dashboard:** `/dashboard`
- **Admin Panel:** `/admin?role=admin`
- **Chat (AI):** `/chat`

---

## 📌 Features

### 📊 Dashboard

- Displays:
  - Revenue
  - Users
  - Orders

- Data is fetched from **MongoDB**
- Fully **config-driven (dynamic)**

---

### ⚙️ Admin Panel

- Admin-only access:

  ```
  /admin?role=admin
  ```

- Update metrics:
  - Revenue
  - Users
  - Orders

- Saves directly to MongoDB
- Changes reflect on dashboard

---

### 🤖 AI Chat (OpenAI Integration)

- Real AI responses using OpenAI API
- User can ask any question
- Messages displayed in chat UI

---

## 🧠 Tech Stack

- **Frontend:** Next.js (App Router)
- **Backend:** Next.js API Routes
- **Database:** MongoDB Atlas
- **AI:** OpenAI API
- **Styling:** CSS / Inline styles

---

## 📂 Project Structure

```
/app
  /dashboard/page.tsx
  /admin/page.tsx
  /chat/page.tsx

/app/api
  /admin/route.ts
  /dashboard/route.ts
  /chat/route.ts

/lib
  mongodb.ts
```

---

## ⚙️ Setup

### 1. Clone

```
git clone <your-repo-link>
cd project
```

### 2. Install

```
npm install
```

### 3. Environment Variables

Create `.env.local`

```
MONGODB_URI=your_mongodb_connection
OPENAI_API_KEY=your_openai_api_key
```

---

### 4. Run

```
npm run dev
```

---

## 🗄️ MongoDB Data

Collection: `dashboardconfigs`

Example:

```
{
  "revenue": 3000,
  "users": 1000,
  "orders": 200
}
```

---

## 🔐 Authorization

- Admin panel is protected using simple role check:

```
/admin?role=admin
```

---

## ⭐ Highlights

- Config-driven dashboard
- Full data flow (Admin → MongoDB → Dashboard)
- Real AI chat using OpenAI
- Clean UI with gradient design
- Modular backend APIs

## 🚀 Future Improvements

- Real authentication (JWT / NextAuth)
- Chat history storage
- Better UI (Tailwind)
- Role-based access

---

## 👨‍💻 Author

Prashant Aryan

---

## ✅ Status

✔ Assignment Completed
✔ OpenAI Integrated
✔ Fully Functional
✔ Ready to Submit
