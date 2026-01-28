import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleSignup = () => {
    signup(data);
    nav("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input
          placeholder="Full Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button onClick={handleSignup}>Sign Up</button>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
