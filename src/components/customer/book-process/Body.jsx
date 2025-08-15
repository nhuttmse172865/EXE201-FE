import React, { useState } from "react";
import ProgressBar from "./progress-bar/ProgressBar";
import BookInformation from "./book-infor/BookInformation";
import PROGRESS_BOOKING from "../../../utils/progress-booking";

const Body = () => {
  const [currentBookingStep, setCurrentBookingStep] = useState(
    PROGRESS_BOOKING[0]
  );
  const handleNextStep = () => {
    const currentIndex = PROGRESS_BOOKING.findIndex(
      (step) => step.id === currentBookingStep.id
    );
    if (currentIndex < PROGRESS_BOOKING.length - 1) {
      setCurrentBookingStep(PROGRESS_BOOKING[currentIndex + 1]);
    }
  };

  const handlePreviousStep = () => {
     const currentIndex = PROGRESS_BOOKING.findIndex(
      (step) => step.id === currentBookingStep.id
    );
    if (currentIndex > 0) {
      setCurrentBookingStep(PROGRESS_BOOKING[currentIndex - 1]);
    }
  }
  return (
    <div className="min-h-[calc(100vh-70px)]">
      <div className="w-full h-[3px] bg-[#F7F7F7]"></div>
      <ProgressBar currentBookingStep={currentBookingStep} />
      <div className="bg-[#F7F7F7] min-h-[calc(90vh)] pt-5">
        <div className="container mx-auto flex gap-5">
          <div className="w-[75%] rounded-[.375rem]">
            {currentBookingStep.component}
          </div>
          <div className=" w-[25%] rounded-[.375rem]">
            <BookInformation handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
