import React from "react";
import ElevatedButton from "../../../../../common/button/elevated-button/ElevatedButton";
import OutlineButton from "../../../../../common/button/outline-button/OutlineButton";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="mt-[200px] font-family-playfair-display text-[40px] w-[90%] mb-5 text-(--color-title-100)">
        Elevate your veterinary clinic's success and reach with our FBase
        platform.
      </h1>
      <p className="w-[30vw] text-[14px] mb-[50px] text-[rgba(0,0,0,0.5)]">
        Reach thousands of pet owners, optimize your operations, and enhance
        your service experience with our comprehensive technology solution.
      </p>
      <div className="flex gap-[20px]">
        <ElevatedButton text={"Become Partner"} height={50} width={150} handleOnclick={() => navigate("/partner-registration/partner-registration-form")}/>
        <OutlineButton text={"Explore"} height={50} width={150} />
      </div>
    </>
  );
};

export default Title;
