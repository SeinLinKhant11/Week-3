import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    if (email === "admin@example.com" && password === "1234") {
      setError("");
      alert("Login successful!");
      console.log("Email:", email);
      console.log("Password:", password);
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Back</h1>
      <p>Please login to your account</p>

      <form onSubmit={handleLogin}>
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;