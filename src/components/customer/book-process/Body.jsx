import React, { useEffect, useState } from "react";
import ProgressBar from "./progress-bar/ProgressBar";
import BookInformation from "./book-infor/BookInformation";
import PROGRESS_BOOKING from "../../../utils/progress-booking";
import useLocalStorage from "use-local-storage";
import axios from "axios";
import BASE from "../../../utils/base";

const Body = () => {
  const [currentBookingStep, setCurrentBookingStep] = useState(
    PROGRESS_BOOKING[0]
  );
  const [loading, setLoading] = useState(false);

  const [booking, setBooking] = useLocalStorage("booking", "");

  const handleMakeAppointment = async () => {
    console.log("asasasassas")
    try {
      const requestData = {
        total: booking?.service?.price,
        price: booking?.service?.price,
        date: booking?.date,
        startHour: booking?.time,
        endHour: calculateEndTime(
          booking?.time,
          booking?.service?.duration?.substring(0, 5)
        ),
        hospitalId: booking?.clinic?.id,
        serviceId: booking?.service?.id,
      };
      const token = sessionStorage.getItem("token");
      if (token) {
        await axios.post(
          `${BASE.BASE_URL}/api/appointments/hospital/make-appointment`,
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  const handleNextStep = async () => {
    const currentIndex = PROGRESS_BOOKING.findIndex(
      (step) => step.id === currentBookingStep.id
    );
    if (
      currentIndex === 0 &&
      (booking.service === null || booking.service === undefined)
    )
      return;

    if (
      currentIndex === 1 &&
      (booking.clinic === null || booking.clinic === undefined)
    )
      return;

    if (currentIndex === 2) {
      console.log(currentIndex, "currentIndex");
      await handleMakeAppointment();
    }
    if (currentIndex < PROGRESS_BOOKING.length - 1) {
      setCurrentBookingStep(PROGRESS_BOOKING[currentIndex + 1]);
    }
  };

  const calculateEndTime = (startTime, duration) => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [durationHour, durationMinute] = duration.split(":").map(Number);
    const totalMinutes =
      startHour * 60 + startMinute + (durationHour * 60 + durationMinute);
    const endHour = Math.floor(totalMinutes / 60);
    const endMinute = totalMinutes % 60;
    const formattedEndHour = String(endHour).padStart(2, "0");
    const formattedEndMinute = String(endMinute).padStart(2, "0");
    return `${formattedEndHour}:${formattedEndMinute}`;
  };

  const handlePreviousStep = () => {
    const currentIndex = PROGRESS_BOOKING.findIndex(
      (step) => step.id === currentBookingStep.id
    );
    if (currentIndex > 0) {
      setCurrentBookingStep(PROGRESS_BOOKING[currentIndex - 1]);
    }
  };

  useEffect(() => {
    if (booking.service) setCurrentBookingStep(PROGRESS_BOOKING[1]);
    if (booking.clinic) setCurrentBookingStep(PROGRESS_BOOKING[2]);
  }, []);

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
            <BookInformation
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
