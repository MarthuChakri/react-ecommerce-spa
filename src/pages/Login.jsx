import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const handleLogin = () => {
    const ok = login(email, password);
    if (ok) nav("/");
    else alert("Invalid credentials");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="auth-switch">
          Don’t have an account? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </div>
  );
}
