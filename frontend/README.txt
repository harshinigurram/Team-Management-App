# 🚀 Team Task Manager (Full-Stack)

A full-stack web application that allows teams to manage projects, assign tasks, and track progress with role-based access control (Admin / Member).

---

## 📌 Features

### 🔐 Authentication

* User Signup & Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes

---

### 📁 Project Management

* Create projects (Admin only)
* View assigned projects
* Add team members to projects

---

### ✅ Task Management

* Create tasks under projects
* Assign tasks to users
* Update task status:

  * Todo
  * In Progress
  * Done

---

### 📊 Dashboard

* View:

  * Completed tasks
  * Pending tasks
  * Overdue tasks (based on deadline)

---

### 🛡️ Role-Based Access Control

* **Admin**

  * Create projects
  * Add team members
* **Member**

  * View projects
  * Update assigned tasks

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

## 📂 Project Structure

```
team-task-manager/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager
```

---

### 🔹 2. Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```
node server.js
```

---

### 🔹 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### Auth

* POST `/api/auth/signup`
* POST `/api/auth/login`

### Projects

* POST `/api/projects` (Admin only)
* GET `/api/projects`
* POST `/api/projects/add-member`

### Tasks

* POST `/api/tasks`
* GET `/api/tasks/:projectId`
* PUT `/api/tasks/:taskId`
* GET `/api/tasks` (Dashboard)

---

## 🚀 Deployment

* Backend: Railway
* Frontend: Vercel

---

## 🎥 Demo Video

(Attach your 2–5 minute demo video link here)

---

## 📦 Submission

* ✅ Live URL
* ✅ GitHub Repository
* ✅ README
* ✅ Demo Video

---

## 💡 Future Enhancements

* Task deadlines with calendar view
* Email notifications
* Real-time updates (WebSockets)
* Advanced analytics dashboard

---

## 👩‍💻 Author

Harshini

---

## ⭐ Acknowledgement

This project was built as part of a full-stack assignment to demonstrate practical implementation of REST APIs, authentication, and role-based access control.
