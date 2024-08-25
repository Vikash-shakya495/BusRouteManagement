import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle signup logic here
      navigate('/home');
    };
  
    return (
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg mt-24">
        <h2 className="text-2xl text-white mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email Address"
              required
              className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Signup
            </button>
          </div>
          <div className="text-center text-white">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </div>
        </form>
      </div>
    );
  }

  
  export default Signup;