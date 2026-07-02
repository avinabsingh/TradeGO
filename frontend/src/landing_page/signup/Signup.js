import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        inputValue,
        {
          withCredentials: true,
        }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "40px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#387ed1",
          }}
        >
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#387ed1",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Signup
          </button>

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Login
            </Link>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;