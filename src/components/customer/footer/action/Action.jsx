import React from "react";
import { useNavigate } from "react-router-dom";
import ElevatedButton from "../../../common/button/elevated-button/ElevatedButton"; // Đảm bảo đường dẫn đúng

const Action = ({
  h1 = "Discover high-quality pet care services with ease and convenience.",
  p = "Quality care, simply found.",
  button = "FIND A VET NOW"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/partnersforms"); // Điều hướng khi nhấn nút
  };

  return (
    <div className="mx-auto container h-[400px] flex flex-col items-center justify-center">
      <h1 className="font-family-playfair-display text-[35px] w-[40vw] text-center mb-5">{h1}</h1>
      <ElevatedButton
        text={button}
        height="45px"
        width="150px"
        handleOnclick={handleClick}
      />
      <p className="mt-5 text-[15px] text-[rgba(0,0,0,0.5)]">{p}</p>
    </div>
  );
};

export default Action;
