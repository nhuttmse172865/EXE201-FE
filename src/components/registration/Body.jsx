import React from "react";
import RegistrationForm from "./form/RegistrationForm";
import LoginContent from "../login/content/LoginContent";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="overflow-hidden" style={{ height: "calc(100vh - 70px)" }}>
      <div
        id="container-login"
        className="container mx-auto h-[100%] grid grid-cols-12"
      >
        <div className="col-span-4" id="container-form-login">
          <Outlet />
        </div>
        <div className="ml-7 col-span-8">
          <LoginContent />
        </div>
      </div>
    </div>
  );
};

export default Body;
