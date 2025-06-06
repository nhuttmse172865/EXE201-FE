import React, { useRef } from "react";
import Title from "./content/title/Title";
import Process from "./content/process/Process";
import useIsInViewport from "../../../../hooks/useIsInViewport";

const OnboardingProcess = () => {
  const onBoardingProcessRef = useRef(null);
  const inView = useIsInViewport(onBoardingProcessRef, { threshold: 0.1 });
  return (
    <div
      className={`my-28 bg-(--color-primary-5) py-20 morph-in-item ${
        inView ? "morph-in-active" : ""
      }`}
      ref={onBoardingProcessRef}
    >
      <div className="mx-auto container">
        <Title />
        <Process />
      </div>
    </div>
  );
};

export default OnboardingProcess;
