import React, { useState } from "react";
import ProgressBar from "./progress-bar/ProgressBar";
import LIST_STEP_FORM_PARTNER from "../../../../utils/list-step-form-partner";

const Body = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleRenderComponent = (component, setCurrentStep) => {
    const Component = component;
    return <Component setCurrentStep={setCurrentStep} />
  }

  return (
    <div>
      <div className="container mx-auto min-h-[calc(100vh-78px)]">
        <div className="flex h-full gap-[40px]">
          <ProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep}/>
          {LIST_STEP_FORM_PARTNER.map((item, index) => (
            <>{currentStep === index + 1 &&  handleRenderComponent(item.component, setCurrentStep) } </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
