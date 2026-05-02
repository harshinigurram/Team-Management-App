import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "../api/axios";

export default function Dashboard() {
  const [stats, setStats] = useState({
    completed: 0,
    pending: 0,
    overdue: 0
  });

  const fetchStats = async () => {
    const res = await axios.get("/tasks");

    let completed = 0;
    let pending = 0;
    let overdue = 0;

    const today = new Date();

    res.data.forEach(task => {
      if (task.status === "Done") completed++;
      else pending++;

      if (task.deadline && new Date(task.deadline) < today && task.status !== "Done") {
        overdue++;
      }
    });

    setStats({ completed, pending, overdue });
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Dashboard Overview
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">

          {/* Completed */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm">Completed Tasks</h2>
            <p className="text-4xl font-bold text-green-500 mt-2">
              {stats.completed}
            </p>
          </div>

          {/* Pending */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm">Pending Tasks</h2>
            <p className="text-4xl font-bold text-yellow-500 mt-2">
              {stats.pending}
            </p>
          </div>

          {/* Overdue */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-gray-500 text-sm">Overdue Tasks</h2>
            <p className="text-4xl font-bold text-red-500 mt-2">
              {stats.overdue}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}