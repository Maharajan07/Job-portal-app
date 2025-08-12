# 💼 JobMatch – MERN Stack Job Portal App

A modern Job Portal Web Application built with the MERN stack, enabling users to browse job listings and apply, while admins can manage job postings efficiently.

🔗 **Live Demo:** [Visit Site](https://cybermindsjob.netlify.app/)

---

## ✨ Features

### 👤 User Panel
- Browse available job listings
- Filter by company, location, and job role
- View job details
- Apply for jobs

### 🔐 Admin Panel
- Add, update, and delete job listings (CRUD operations)
- Manage job data from a centralized dashboard

---

## 📁 Project Structure
 ```bash
Job-portal-app-main/
├── backend/ # Express backend server
│ ├── models/ # MongoDB schemas (Job model)
│ ├── routes/ # API routes
│ └── server.js # Main entry point
├── src/ # React frontend
│ ├── assets/ # Logos and images
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry file
├── .env # Environment variables
├── package.json # Project metadata
├── vite.config.js # Vite config for frontend
└── README.md
```

---

## 🚀 Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Maharajan07/Job-portal-app.git
cd Job-portal-app
```
###2️⃣ Install Dependencies
```bash
# Frontend
npm install

# Backend
cd backend
npm install
```
###3️⃣ Set Up Environment Variables
Create a .env file in both root and backend/ directories.

Root .env (for frontend)
```bash

VITE_API_URL=http://localhost:5000
```
Backend .env
```bash
MONGO_URL=your_mongodb_connection_string
PORT=5000
```
###4️⃣ Start the Development Servers
Backend:
```bash
cd backend
npm start
```
Frontend:
```bash
npm run dev
```
---
## 🛠 Tech Stack

Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

---

#### Made by Maharajan!
