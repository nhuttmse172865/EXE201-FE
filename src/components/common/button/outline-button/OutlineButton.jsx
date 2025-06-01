import React from "react";

const OutlineButton = ({ text, width, height, rounded, fontSize, color, borderColor, handleOnclick }) => {
  return (
    <div
      className="border-[1px] border-(--color-primary-100) flex justify-center items-center font-family-poppins rounded-[5px] cursor-pointer"
      style={{
        height: height,
        borderRadius: rounded,
        width: width,
        borderColor: borderColor
      }}
      onClick={() => handleOnclick()}
    >
      <span
        className="text-[14px] text-(--color-primary-100) font-normal"
        style={{ fontSize: fontSize, color: color }}
      >
        {text}
      </span>
    </div>
  );
};

export default OutlineButton;
