import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    // 🔥 Redirect to login
    navigate("/");
  };

  return (
    <div className="border p-4 flex justify-between">

      <h2 onClick={() => navigate("/dashboard")}>
        Dashboard
      </h2>

      <div>
        <button onClick={() => navigate("/projects")}>
          Projects
        </button>

        <button onClick={logout}>
          Logout
        </button>
      </div>

    </div>
  );
}