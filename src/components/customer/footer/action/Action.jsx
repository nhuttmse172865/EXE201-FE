import React from "react";
import { useNavigate } from "react-router-dom";

const Action = ({ h1, p, button }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/partnersforms"); // Đây là route đến RegistrationForm.jsx
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">{h1}</h1>
      <p className="text-lg mb-6">{p}</p>
      <button
        onClick={handleClick}
        className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
      >
        {button}
      </button>
    </div>
  );
};

export default Action;
