import { useState, useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // 🔥 Auto redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        await axios.post("/auth/signup", data);
        alert("Signup successful");
        setIsSignup(false);
      } else {
        const res = await axios.post("/auth/login", data);

        localStorage.setItem("token", res.data.token);

        // 🔥 Redirect after login
        navigate("/dashboard");
      }
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">

      <div className="border p-6">

        <h2>{isSignup ? "Signup" : "Login"}</h2>

        {isSignup && (
          <input
            placeholder="Name"
            onChange={(e) =>
              setData({ ...data, name: e.target.value })
            }
          />
        )}

        <input
          placeholder="Email"
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button onClick={handleSubmit}>
          {isSignup ? "Signup" : "Login"}
        </button>

        <p onClick={() => setIsSignup(!isSignup)}>
          Switch
        </p>

      </div>
    </div>
  );
}