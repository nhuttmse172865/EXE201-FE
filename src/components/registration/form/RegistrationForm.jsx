import React from "react";
import RegistrationMethod from "../method/RegistrationMethod";
import { Outlet } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="grid items-center relative top-[50%] translate-y-[-50%] max-w-[360px] scroll-hidden">
      <div>
        <p className="mb-5 text-(--color-primary-100) text-[14px]">Register</p>
        <h1 className="font-family-playfair-display text-3xl text-(--color-title-100)">
          Welcome to FBase!
        </h1>
        <p className="text-[14px] text-(--color-title-50) mt-1.5 mb-10">
          Unlock personalized recommendations, book services, and manage your
          pet's needs—all in one place.
        </p>
      </div>
       <RegistrationMethod />
    </div>
  );
};

export default RegistrationForm;
