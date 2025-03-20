import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiPadlock } from "react-icons/gi";

const AccountInfo = () => {
  const [balance, setBalance] = useState(0);
  const finalBalance = 2950000.00; // Original value for calculations

  useEffect(() => {
    let startValue = 0;
    const duration = 2000; // Duration of the animation in milliseconds
    const increment = finalBalance / (duration / 100); // Increment for each 100ms

    const animateBalance = () => {
      if (startValue < finalBalance) {
        startValue += increment;
        setBalance(Math.min(startValue, finalBalance).toFixed(2)); // Ensures it stops at the final balance
      }
    };

    const animation = setInterval(animateBalance, 100); // Runs every 100ms
    return () => clearInterval(animation); // Cleanup interval when component unmounts
  }, []);

  // Format balance for display
  const formatBalance = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="bg-blue-600 text-white p-4 rounded-b-lg">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold">PREMIER SAVINGS</h1>
          <p>1590944857</p>
          <p>Wallet Number: 678DD67</p>
          <p>
            Account Status: <span className="font-bold">REGULAR</span>
          </p>
        </div>
        
      </div>
      <div className="text-2xl font-bold my-4">AVAILABLE BALANCE</div>
      {/* Balance with animation */}
      <div className="text-3xl font-bold transition-all duration-500 ease-in-out">
        {formatBalance(balance)}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <Link to="/readmore">
          <button className="bg-blue-700 py-2 rounded-lg text-white w-full">
          <div className="flex items-center justify-center gap-2 py-2 rounded-lg">
            Read More
            </div>
          </button>
        </Link>
        <Link to="/withdrawal">
        <button className="bg-blue-700 py-2 rounded-lg text-white w-full">
  <div className="flex items-center justify-center gap-2 py-2 rounded-lg">
    Withdraw <GiPadlock />
  </div>
</button>
        </Link>
        <Link to="/history">
          <button className="bg-blue-700 py-2 rounded-lg text-white w-full">
          <div className="flex items-center justify-center gap-2 py-2 rounded-lg">
            History <GiPadlock />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AccountInfo;
