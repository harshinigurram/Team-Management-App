import { useEffect, useState } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const fetchProjects = async () => {
    const res = await axios.get("/projects");
    setProjects(res.data);
  };

  const createProject = async () => {
    await axios.post("/projects", { title });
    setTitle("");
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project name"
        />

        <button onClick={createProject}>
          Add
        </button>

        {projects.map((p) => (
          <div
            key={p._id}
            onClick={() => navigate(`/tasks/${p._id}`)}
            className="border mt-2 cursor-pointer"
          >
            {p.title}
          </div>
        ))}

      </div>
    </>
  );
}