import React, { useState } from "react";

const VerifyLogin = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [error, setError] = useState("");

  const correctAnswers = {
    question1: "Brece",
    question2: "Laurel High school",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      answer1.trim().toLowerCase() === correctAnswers.question1.toLowerCase() &&
      answer2.trim().toLowerCase() === correctAnswers.question2.toLowerCase()
    ) {
      // Redirect to homepage (replace with your routing logic)
      window.location.href = "/home";
    } else {
      setError("Wrong answers. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Security Questions
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              What's MAGRET's favorite childhood pet's name?
            </label>
            <input
              type="text"
              value={answer1}
              onChange={(e) => setAnswer1(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              What's the name of MAGRET first school?
            </label>
            <input
              type="text"
              value={answer2}
              onChange={(e) => setAnswer2(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyLogin;