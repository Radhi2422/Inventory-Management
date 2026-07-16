import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../services/authService";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const userLoggedIn = async (e) => {
    e.preventDefault();

    try {
      console.log(userId,password);
      const response = await loginUser({
        userId,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", userId);
        // if role is user then goto userdashboard, role is admin then goto dashboard
        if(response.data.role==="User"){
          navigate("/userdashboard", {
          replace: true,
        });
        }else if(response.data.role==="Coder"){
          navigate("/codedashboard", {
          replace: true,
        })  }        
          else{
          navigate("/dashboard", {
          replace: true,
        });
      }
        // console.log(response.data);

        //
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Welcome Back</h2>

        <p className="subtitle">
          Login to continue
        </p>

        <form onSubmit={userLoggedIn}>

          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            Login
          </button>

        </form>

        <div className="divider">
          <span>New to Inventory Management?</span>
        </div>

        <Link to="/register" className="register-btn">
          Create your account
        </Link>

      </div>
    </div>
  );
};

export default Login;