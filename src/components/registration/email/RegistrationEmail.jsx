import React from "react";
import ElevatedButton from "../../common/button/elevated-button/ElevatedButton";
import { useNavigate } from "react-router-dom";

const RegistrationEmail = () => {
  const navigate = useNavigate();

  const classInputName = `h-[48px] border-[1px] border-(--color-title-20) rounded-[.375rem] text-(--color-title-100) text-[15px] ${
    false && "error"
  }`;
  const classInputEmail = `h-[48px] border-[1px] border-(--color-title-20) rounded-[.375rem] text-(--color-title-100) text-[15px] ${
    false && "error"
  }`;
  const classInputPassword = `h-[48px] border-[1px] border-(--color-title-20) rounded-[.375rem] text-(--color-title-100) text-[15px] ${
    false && "error"
  }`;

  return (
    <div className="grid items-start mt-24 max-w-[350px]">
      <div className="mb-2">
        <p className="mb-5 text-(--color-primary-100) text-[14px]">Register</p>
        <h1 className="font-family-playfair-display text-3xl text-(--color-title-100)">
          Sign up with Email
        </h1>
        <p className="text-[14px] text-(--color-title-50) mt-1.5 mb-10">
          Sign up with{" "}
          <span
            onClick={() => navigate("/registration")}
            className="text-(--color-primary-70) font-medium cursor-pointer"
          >
            Google
          </span>{" "}
          instead
        </p>
      </div>
      <div className="grid mb-5">
        <label className="text-[14px] mb-0.5 text-(--color-title-60)">
          Name
        </label>
        <input
          className={classInputName}
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="grid mb-5">
        <label className="text-[14px] mb-0.5 text-(--color-title-60)">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          className={classInputEmail}
          type="text"
          placeholder="Email address"
        />
      
      </div>
      <div className="grid mb-10">
        <label className="text-[14px] mb-0.5 text-(--color-title-60)">
          Password<span className="text-red-500">*</span>
        </label>
        <input
          className={classInputPassword}
          type="password"
          placeholder="Password"
        />
        
      </div>
      <ElevatedButton text="Sign up" height="48px" rounded="0.375rem" handleOnclick={() => navigate("/registration/confirm-email")}/>
      <p className="text-[14px] text-(--color-title-50) mt-20">
        You already have account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-(--color-primary-80) hover:text-(--color-primary-100) ease-in duration-300 font-semibold cursor-pointer"
        >
          Login
        </span>
      </p>{" "}
    </div>
  );
};

export default RegistrationEmail;
