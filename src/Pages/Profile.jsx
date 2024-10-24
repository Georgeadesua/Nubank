import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook if using react-router for navigation
import ProfileImage from '../assets/client_img.jpg';

const Profile = () => {
  // States for toggles
  const [autoLogin, setAutoLogin] = useState(true);
  const [introVideo, setIntroVideo] = useState(true);
  const [productSuggestions, setProductSuggestions] = useState(true);
  const [theme, setTheme] = useState("system");
  const [appIcon, setAppIcon] = useState("default");

  const navigate = useNavigate(); // Use navigate for redirection

  const handleLogout = () => {
    // Here you can clear any stored user data if necessary, then navigate back to the homepage.
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold">Profile</h2>
        {/* Profile Image */}
        <div className="mt-4">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
        <h3 className="text-xl">Dave</h3>
        <h3 className="text-lg"><span className="font-bold">Wallet number:</span> 678DD67</h3>
      </div>

      {/* Settings Sections */}
      <div className="p-6">
        {/* Privacy and Security */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-600">Privacy and Security</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-800">Auto Login on app start</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={autoLogin}
                onChange={() => setAutoLogin(!autoLogin)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Appearance */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-600">Appearance</h3>
          {/* Theme Option */}
          <div className="mt-4">
            <span className="text-gray-800">Theme</span>
            <div className="flex space-x-4 mt-2">
              <button
                className={`w-6 h-6 rounded-full ${theme === "dark" ? "ring-4 ring-blue-500" : ""}`}
                style={{ backgroundColor: "#000" }}
                onClick={() => setTheme("dark")}
              />
              <button
                className={`w-6 h-6 rounded-full ${theme === "light" ? "ring-4 ring-blue-500" : ""}`}
                style={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
                onClick={() => setTheme("light")}
              />
              <button
                className={`w-6 h-6 rounded-full ${theme === "system" ? "ring-4 ring-blue-500" : ""}`}
                style={{ backgroundColor: "#f3f3f3" }}
                onClick={() => setTheme("system")}
              />
            </div>
          </div>
        </div>

        {/* Other Settings */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-600">Additional Settings</h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-800">Intro Video</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={introVideo}
                onChange={() => setIntroVideo(!introVideo)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-800">Product Suggestions</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={productSuggestions}
                onChange={() => setProductSuggestions(!productSuggestions)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
