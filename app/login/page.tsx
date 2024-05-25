import React from "react";
import Link from "next/link";

const Login = () => {
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
        <form style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Username"
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
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>
          <Link href="/dashboard">
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
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
