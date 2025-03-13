import React, { useState, useEffect } from 'react';
import Withdraw_img from '../assets/withdrawal.png'
import { Link } from 'react-router-dom';

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <img src={Withdraw_img} alt="Loading..." className="w-24 h-24 animate-ping" />
      {/* Adjust the image path and styling as needed */}
    </div>
  );
}

function Withdrawal() {
  return (
    <div className="p-6 bg-gray-50 h-screen">
      <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow">
        {/* Transaction Limit */}
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500">Daily Transaction Limit: $1,000,000</p>
          <div className="flex justify-between text-gray-700 mt-1">
            <span>$0.00 used</span>
            <span>$1,000,000 remaining</span>
          </div>
        </div>
        
        {/* Bank and Account Number */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Bank</label>
          <input type="text" value="WITHDRAWAL" readOnly className="w-full mt-1 p-2 border rounded"/>
        </div>
        
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Wallet Number</label>
          <input type="text" placeholder='Wallet Number' className="w-full mt-1 p-2 border rounded"/>
        </div>

        {/* Amount and Commission */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Amount</label>
          <input type="text" placeholder='$ Amount'  className="w-full mt-1 p-2 border rounded"/>
        </div>
        
        <div className="flex justify-between text-gray-700 text-sm">
          <span>Maximum Amount: $500,000</span>
          <span>Commission: $00.00</span>
        </div>

        {/* Proceed Button */}
        <Link to='/withdraw'>
        <button className="w-full mt-6 p-3 bg-blue-700 text-white font-bold rounded">WITHDRAW</button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate loading
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen /> : <Withdrawal />;
}
