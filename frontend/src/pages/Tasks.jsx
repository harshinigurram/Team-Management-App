import { useEffect, useState } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

export default function Tasks() {
  const { id } = useParams();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get(`/tasks/${id}`);
    setTasks(res.data);
  };

  const createTask = async () => {
    await axios.post("/tasks", {
      title,
      projectId: id
    });

    setTitle("");
    fetchTasks();
  };

  const updateStatus = async (taskId, status) => {
    await axios.put(`/tasks/${taskId}`, { status });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task"
        />

        <button onClick={createTask}>
          Add Task
        </button>

        {tasks.map((t) => (
          <div key={t._id} className="border mt-2 flex justify-between">

            <span>{t.title}</span>

            <select
              value={t.status}
              onChange={(e) =>
                updateStatus(t._id, e.target.value)
              }
            >
              <option>Todo</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

          </div>
        ))}

      </div>
    </>
  );
}