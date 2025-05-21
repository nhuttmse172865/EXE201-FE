import React from "react";

const InputText = ({ width, height, rounded, placeholder }) => {
  return (
    <div className="relative w-[400px] h-[48px] rounded-[0.375rem] overflow-hidden p-2.5 border-[1px] border-(--color-title-40)" style={{ width: width, height: height, borderRadius: rounded }}>
      <input type="text" placeholder={placeholder} className="w-[100%] h-[100%] outline-0 border-0 text-[14px] text-(--color-title-100) placeholder:text-[13px] placeholder:text-[rgba(0,0,0,0.3)]"/>
    </div>
  );
};

export default InputText;
