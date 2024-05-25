"use client"
import React, { useState, FormEvent } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        localStorage.setItem("username", username);
        // Redirect to "/dashboard" after successful login
        window.location.href = "/dashboard";
      } else if (response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login error. Please try again later.");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('back-motor.jpg')",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>LOGIN</h2>
        {error && <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>}
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#ff6600",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;