import React from "react"
import OUTSTANDING_LIST from "../../../../../../utils/outstanding-partner";
import Background from "./background/Background"

const Outstanding = () => {
  return (
    <div className="bg-[#EBEBEB] w-full h-full rounded-[30px] relative">
       <Background />
      <div className=" absolute bottom-[15px] right-[15px] flex gap-[10px] ">
        {OUTSTANDING_LIST.map((item) => (
          <div className="bg-[#F3F3F3] cursor-pointer text-[rgba(0,0,0,0.7)] px-[20px] py-[5px] text-[12px] rounded-[15px]">
            {item.name}
          </div>
        ))}
      </div>

      <div className="w-[270px] h-[200px] absolute left-0 bottom-[15%] bg-[rgba(0,0,0,0.01)] blur-[1px] translate-x-[-60%] rounded-[15px] border-[white] border-[1px] p-[10px]">
        <div className="w-full h-full bg-[rgba(0,0,0,0.1)]  rounded-[5px]"></div>
      </div>

      <div className="w-[195px] h-[185px] absolute right-[15px] top-[15px]">
        <div className="bg-[#F8F8F8] w-full h-full rounded-tl-[20px] rounded-b-[20px]"></div>
        <div className="right-0 top-0 pl-[5px] pb-[5px] w-fit absolute bg-[#EBEBEB] rounded-bl-[20px]">
          <div className="bg-[#F3F3F3] cursor-pointer text-[rgba(0,0,0,0.7)] px-[20px] py-[5px] text-[12px] rounded-[15px]">
            <span>Learn More</span>
          </div>

          <div className=" absolute top-full right-0 rotate-[270deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path d="M50 0.5C50 17 40 50 0 50H50V0.5Z" fill="#EBEBEB" />
            </svg>
          </div>

          <div className=" absolute top-0 right-full rotate-[270deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path d="M50 0.5C50 17 40 50 0 50H50V0.5Z" fill="#EBEBEB" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outstanding;
