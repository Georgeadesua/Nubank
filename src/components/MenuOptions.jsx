import React from "react";
import { Link } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";

const menuOptions = [
  { name: "Account", path: "/profile" },
  { name: "Transaction", path: "/transactions" },
  { name: "Connect New Wallet" },
  { name: "connect New Wallet Card" },
  { name: "Send Crypto" },
  { name: "Send Crypto" },
];

const MenuOptions = () => {
  return (
    <div className="bg-white p-4">
      {menuOptions.map((option, index) => (
        <div key={index} className="py-4 border-b border-gray-200">
          {option.path ? (
            // Make the entire container clickable by wrapping it in a Link
            <Link to={option.path} className="flex justify-between items-center text-gray-800 hover:bg-gray-100 p-4 rounded">
              <span>{option.name}</span>
              <GiPadlock />
            </Link>
          ) : (
            // For items with no path, display the text and "Coming Soon"
            <div className="flex justify-between items-center">
              <span className="text-gray-800">{option.name}</span>
              <span className="text-red-500 bg-red-100 px-2 py-1 rounded text-xs">
              <GiPadlock />
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuOptions;