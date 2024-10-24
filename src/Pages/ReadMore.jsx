import React from "react";

const ReadMore = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Important Wallet Information</h1>
        <p className="text-gray-600 mb-4">
          Your Nubank private wallet was created on <span className="font-semibold">Oct-3-2024</span>, it is currently a <span className="font-semibold">regular account</span>.
          You will start your withdrawal when your account is migrated to a <span className="font-semibold">standard wallet</span>.
        </p>
        <p className="text-gray-600 mb-4">
          You will migrate to a standard account if you complete the total transaction of <span className="font-semibold">$320,000</span>.
        </p>
        <p className="text-gray-600 mb-4">Thank you.</p>
        
        <p className="text-gray-500 text-sm mb-6">
          You received this message to let you know important information about your wallet withdrawal and services.
        </p>
        
      </div>
    </div>
  );
};

export default ReadMore;
