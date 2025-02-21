import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleExploreClick = () => {
    setIsModalOpen(true); // Open the modal only on button click
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white relative">
      {/* Welcome Section */}
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to Vaishanav Library</h1>
      <p className="text-lg mb-6 text-center max-w-lg">
        Manage books, track members, and keep your library organized in one place.
      </p>
      <button
        onClick={handleExploreClick}
        className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Explore Library
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center max-w-sm w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Please Log In First</h2>
            <p className="text-gray-600 mb-6">You need to log in to access the library management system.</p>
            <div className="flex gap-4 justify-center">
              <Link to={"/register"} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Sign Up
              </Link>
              <Link to={"/login"} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                Log in
              </Link>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
