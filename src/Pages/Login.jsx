import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/nubank.png'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation for demonstration
    if (username === "678DD67" && password === "Upnorth2016!") {
      navigate("/home"); // Redirect to home page after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
      <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-lg shadow-lg mb-6">
  <img
    src={Logo}
    alt="Bank"
    className="w-24 mb-4 transition-transform duration-300 hover:scale-105" // Increased size and hover effect
  />
  <h1 className="text-2xl font-bold text-white text-center mb-2">
    Nubank Private Wallet
  </h1>
  <p className="text-lg text-white opacity-80 text-center">
    Your gateway to seamless digital banking
  </p>
</div>
        
        <h2 className="text-xl text-center mb-6 font-bold">
          LOGIN
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Wallet Number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-blue-500">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-b from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:bg-orange-600"
          >
            SIGN IN 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
