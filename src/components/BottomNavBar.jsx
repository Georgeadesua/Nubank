import React from "react";
import { FaHome, FaBars, FaQrcode, FaLifeRing, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  return (
    <div className="bg-white shadow-md py-3 fixed bottom-0 inset-x-0 flex justify-around">
      <div className="flex flex-col items-center">
      <Link to="/home">
      <FaHome className="w-4 h-4" />
        <span className="text-xs">Home</span>
        </Link>
      </div>
      <div className="flex flex-col items-center">
      <FaBars className="w-4 h-4" />
        <span className="text-xs">Menu</span>
      </div>
      <div className="flex flex-col items-center">
      <FaQrcode className="w-4 h-4" />
        <span className="text-xs">Scan</span>
      </div>
      <div className="flex flex-col items-center">
      <FaLifeRing className="w-4 h-4" />
        <span className="text-xs">Support</span>
      </div>
      <div className="flex flex-col items-center">
      <Link to="/profile">
      <FaUser className="w-4 h-4" />
        <span className="text-xs">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
