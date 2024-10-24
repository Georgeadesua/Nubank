import React from "react";
import { Link } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6";

const menuOptions = [
  { name: "Account", path: "/profile" },
  { name: "Transaction", path: "/transactions" },
  { name: "Connect Bank" },
  { name: "Connect Card" },
  { name: "Send Crypto" },
  { name: "Send Crypto" },
];

const MenuOptions = () => {
  return (
    <div className="bg-white p-4">
      {menuOptions.map((option, index) => (
        <div key={index} className="flex justify-between items-center py-4 border-b border-gray-200">
          {option.path ? (
            // If a path exists, make the item clickable
            <Link to={option.path} className="text-gray-800">
              {option.name}
            </Link>
          ) : (
            // If no path, just display text
            <span className="text-gray-800">{option.name}</span>
          )}

          {option.path ? (
            // If path exists, show the ">" icon
            <FaSackDollar />
          ) : (
            // If no path, show "Coming Soon" box
            <span className="text-red-500 bg-red-100 px-2 py-1 rounded text-xs">
              Coming soon
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuOptions;
