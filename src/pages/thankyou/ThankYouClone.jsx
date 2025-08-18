import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYouClone = () => {
  const navigate = useNavigate();

 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);  
  }, [navigate]);

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">
        Thank You For Paying!
      </h1>
      <p className="text-gray-500 mb-6">
        You will be redirected to the homepage in 5 seconds...
      </p>
      <button
        onClick={handleClose}
        className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600"
      >
        Close
      </button>
    </div>
  );
};

export default ThankYouClone;
