import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Wallet_img from '../assets/wallet_barcode.png';

export default function WalletAddress() {
  const walletAddress = '1ABLMP6jVGzj4NmQ5K2nZjADyBFBDh4qqZ';
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopySuccess('Wallet address copied!');
    setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
  };

  const navigate = useNavigate(); // Use navigate for redirection

  const handleLogout = () => {
    // Here you can clear any stored user data if necessary, then navigate back to the homepage.
    navigate("/");
  };

  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        {/* Wallet Image */}
        <img
          src={Wallet_img} // Replace with your image path
          alt="Wallet"
          className="w-24 h-24 mx-auto mb-4"
        />

        {/* Wallet Address Section */}
        <h2 className="text-lg font-semibold text-gray-700">Make transaction to access your withdraw</h2>
        <div className="mt-2 p-4 bg-gray-100 border rounded-lg">
          <p className="text-gray-800 mb-2">{walletAddress}</p>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          >
            Copy Wallet Address
          </button>
          
        </div>
        <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-500 focus:outline-none"
            
          >
            Logout
          </button>

        {/* Copy Success Message */}
        {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}
      </div>
    </div>
    
   </>
  );
}
