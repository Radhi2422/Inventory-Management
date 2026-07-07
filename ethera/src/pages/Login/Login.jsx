import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../services/authService";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userLoggedIn=async (e)=>{
    e.preventDefault();
    try{
      const response=await loginUser({
          userId,password
      });
      if(response.data.success){
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", userId);
        // localStorage.setItem("role", response.role);
        console.log(response.data.token);
        navigate("/dashboard", {
          replace: true
        });
      }

    }catch(err){
      setError(err.response?.data?.message ||"Login Failed");
    }
  }
  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={userLoggedIn}>

          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e)=>
              setUserId(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
          />

          {error && (
            <p className="error">{error}</p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  )
}

export default Login
/*








import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";
import "./Login.css";

export default function Login() {

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {

    e.preventDefault();

    try {

      const response =
      await loginUser({
        userId,
        password
      });

      if(response.data.success){

        localStorage.setItem(
          "role",
          response.data.role
        );

        navigate("/dashboard", {
          replace: true
        });
      }

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={login}>

          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e)=>
              setUserId(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
          />

          {error && (
            <p className="error">{error}</p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}
   */
  