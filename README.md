# SSX Telegram Mini App — Shill Leaderboard

This repo is a plug-and-play starter kit for building the **SSX Shill Leaderboard** inside Telegram.  
It includes:

- A **Telegram bot backend** (Node.js + Telegraf + Express + PostgreSQL)
- A **React frontend** (Leaderboard Mini-App viewable inside Telegram)
- A **Postgres schema** (for Supabase or any Postgres DB)

---

## 🚀 Quick Start

### 1. Setup Database (Supabase)
1. Go to [Supabase](https://supabase.com) → create a project.
2. Copy your `DATABASE_URL`.
3. Run `backend/db.sql` inside the SQL editor.

---

### 2. Deploy Backend (Render)
1. Go to [Render](https://render.com) → **New Web Service**.
2. Connect this GitHub repo → pick the `backend/` folder.
3. Set these environment variables:
