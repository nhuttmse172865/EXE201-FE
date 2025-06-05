import React from "react";
import LoginForm from "./form/LoginForm";
import LoginContent from "./content/LoginContent";

const Body = () => {
  return (
    <div className="" style={{ height: "calc(100vh - 70px)" }}>
      <div
        id="container-login"
        className="container mx-auto h-[100%] grid grid-cols-12"
      >
        <div className="col-span-4" id="container-form-login">
          <LoginForm />
        </div>
        <div className="ml-7 col-span-8">
          <LoginContent />
        </div>
      </div>
    </div>
  );
};

export default Body;
