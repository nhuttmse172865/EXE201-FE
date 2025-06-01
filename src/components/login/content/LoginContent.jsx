import React, { useEffect, useState } from "react";

const LoginContent = () => {

  return (
    <div
      className="relative bg-[rgba(0,0,0,0.1)] w-full rounded-tr-[25px] rounded-tl-[25px] rounded-bl-[25px] overflow-hidden"
      style={{
        height: "calc(100% - 10px)",
      }}
    >
      <div className="absolute w-[55%] h-[100px] bg-white bottom-0 right-0 rounded-tl-[25px]"
      
      >
        <div className="absolute right-full bottom-0 w-[25px] h-[25px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path d="M50 0.5C50 17 40 50 0 50H50V0.5Z" fill="white" />
          </svg>
        </div>
        <div className="absolute right-0 bottom-full w-[25px] h-[25px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path d="M50 0.5C50 17 40 50 0 50H50V0.5Z" fill="white" />
          </svg>
        </div>

        <h1></h1>

      </div>

    
    </div>
  );
};

export default LoginContent;
