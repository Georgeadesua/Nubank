import React from "react";
import { Lock } from "lucide-react";

const AccountLocked = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <div className="flex justify-center mb-4">
          <Lock className="w-16 h-16 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Account is Locked</h1>
        <p className="text-gray-600 mt-2">
          Your account has been temporarily locked due to security reasons. Please contact support for assistance.
        </p>
        <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default AccountLocked;
