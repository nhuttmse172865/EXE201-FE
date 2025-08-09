import React from "react";
import Content from "./content/Content";

const FirstStep = ({ setCurrentStep, formData, setFormData }) => {
  return (
    <div className=" w-full flex justify-center gap-[80px]">
      <div className="flex w-[25vw] flex-col mt-[20vh]">
        <div className="">
          <span className="text-[18px] text-[rgba(0,0,0,0.3)] font-light">
            Step 1
          </span>
          <h1 className="mt-10 font-family-playfair-display text-[30px] mb-4 text-(--color-title-100) w-[30vw]">
            Welcome! Let's start with some basic information
          </h1>
          <p className=" text-[16px] mb-[50px] text-[rgba(0,0,0,0.4)]">
            Please fill this out carefully, as this information will be publicly
            visible on your clinic's profile to help new customers find you
          </p>
        </div>
      </div>
      <Content
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default FirstStep;
