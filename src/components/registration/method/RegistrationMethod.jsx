import React from "react";
import IMAGES from "../../../utils/images";
import ElevatedButton from "../../common/button/elevated-button/ElevatedButton";
import { useNavigate } from "react-router-dom";

const RegistrationMethod = () => {
  const navigate = useNavigate();

  return (
    <>
      <ElevatedButton
        text={"Sign up with email"}
        height={"48px"}
        rounded={".375rem"}
        handleOnclick={() => navigate("email")}
      />
      <div className="flex items-center justify-between gap-x-[10px] max-w-[380px] text-[rgba(0,0,0,0.2)] mt-[30px]">
        <div className="h-[0.5px] bg-[rgba(0,0,0,0.2)] w-full"></div>or
        <div className="h-[0.5px] bg-[rgba(0,0,0,0.2)] w-full"></div>
      </div>
      <div className="cursor-pointer h-[48px] bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.1)] rounded-[0.375rem] max-w-[380px] flex justify-center items-center gap-[15px] mt-[30px] mb-[70px] ease-in duration-300">
        <img src={IMAGES.googleIcon} alt="" className="max-h-[100%] h-[24px]" />
        <span className="text-[14px] text-[rgba(0,0,0,0.7)] translate-y-[1px]">
          Sign up with Google
        </span>
      </div>
      <p className="text-[14px] text-(--color-title-50)">
        You already have account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-(--color-primary-80) hover:text-(--color-primary-100) ease-in duration-300 font-semibold cursor-pointer"
        >
          Login
        </span>
      </p>{" "}
    </>
  );
};

export default RegistrationMethod;
