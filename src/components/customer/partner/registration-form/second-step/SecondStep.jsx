import React from "react";
import Content from "./content/Content";

const SecondStep = ({ setCurrentStep, formData, setFormData }) => {
  return (
    <div className=" w-full flex justify-center gap-[80px]">
      <div className="flex w-[25vw] flex-col mt-[20vh]">
        <div className="">
          <span className="text-[18px] text-[rgba(0,0,0,0.3)] font-light">
            Step 2
          </span>
          <h1 className="mt-10 font-family-playfair-display text-[30px] mb-4 text-(--color-title-100) w-[30vw]">
            Legal Verification
          </h1>
          <p className=" text-[16px] mb-[50px] text-[rgba(0,0,0,0.4)]">
            To ensure a safe and trustworthy community, we need to verify the
            following documents. This information will be kept confidential.
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

export default SecondStep;
