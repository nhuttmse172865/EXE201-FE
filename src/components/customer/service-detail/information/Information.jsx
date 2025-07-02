import React from "react";
import ElevatedButton from "../../../common/button/elevated-button/ElevatedButton";

const Information = () => {
  return (
    <div className="container mx-auto mt-5 h-[40px]">
      <div
        className=" bg-white p-5 translate-y-[-80%] w-[50%] ml-5 rounded-[10px] flex"
        style={{
          boxShadow: "1px 1px 100px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div className="w-[80%]">
          <h1 className="font-family-playfair-display text-[28px]">
            Spa & Beauty Services
          </h1>
          <p className="text-[15px] mt-1 text-[rgba(0,0,0,0.5)] w-full">
            Comprehensive care from nails, teeth to skin and fur for your pet
          </p>
        </div>
        <div className="w-[20%]">
          <p className="mb-2.5 text-(--color-primary-100) font-medium">20$</p>
          <ElevatedButton text={"Book"} height={45} />
        </div>
      </div>
    </div>
  );
};

export default Information;
