import React from "react";
import Title from "./title/Title";
import Outstanding from "./outstanding/Outstanding";

const Content = () => {
  return (
    <div className="mx-auto container h-full flex gap-x-[20px]">
      <div className="h-full w-[48%]">
        <Title />
      </div>
      <div className="h-full w-[52%] px-5 pl-[100px] py-5">
        <Outstanding />
      </div>
    </div>
  );
};

export default Content;
