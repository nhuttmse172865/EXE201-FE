import React from "react";

const Background = () => {
  return (
    <div className="bg-white w-[96px] h-[96px] rounded-br-[30px] relative">
      <div className=" absolute top-full rotate-[180deg]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path d="M50 0.5C50 17 40 50 0 50H50V0.5Z" fill="white" />
        </svg>
      </div>
      <div className=" absolute top-0 left-full rotate-[180deg]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path d="M50 0.5C50 17 40 50 0 50H50V0.5Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default Background;
