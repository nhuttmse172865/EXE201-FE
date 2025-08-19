import React, { useEffect, useState } from "react";
import useGenerateHours from "../../../../../hooks/useGenerateHours";
import useLocalStorage from "use-local-storage";

const Time = ({
  unavailableTimes,
  availableTime,
  timeSelected,
  setTimeSelected,
}) => {
  const [startHour, setStartHour] = useState();
  const [startMin, setStartMin] = useState();
  const [endHour, setEndHour] = useState();
  const [endMin, setEndMin] = useState();
  const [unavailableTime, setUnavailableTime] = useState([]);
  const [booking, setBooking] = useLocalStorage("booking", "");

  const generateHoursArray = (
    startHour,
    startMinute,
    endHour,
    endMinute,
    intervalMinutes
  ) => {
    const result = [];
    let currentHour = startHour;
    let currentMinute = startMinute;

    while (
      currentHour < endHour ||
      (currentHour === endHour && currentMinute <= endMinute)
    ) {
      const formattedHour = `${String(currentHour).padStart(2, "0")}:${String(
        currentMinute
      ).padStart(2, "0")}`;
      result.push(formattedHour);

      currentMinute += intervalMinutes;
      if (currentMinute >= 60) {
        currentHour++;
        currentMinute -= 60;
      }
    }

    return result;
  };

  const handleGenerateUnvailableTime = () => {
    unavailableTimes?.map((time) => {
      const unavailableTimeArray = generateHoursArray(
        parseInt(time?.startTime?.split(":")[0]),
        parseInt(time?.startTime?.split(":")[1]),
        parseInt(time?.endTime?.split(":")[0]),
        parseInt(time?.endTime?.split(":")[1]),
        15
      );
      setUnavailableTime([...unavailableTime, ...unavailableTimeArray]);
    });
  };

  const handleSelectTime = (time) => {
    setTimeSelected(time);
    setBooking({
      service: booking.service,
      clinic: booking.clinic,
      date: booking.date,
      time: time,
    });
  };

  useEffect(() => {
    handleGenerateUnvailableTime();
  }, [unavailableTimes]);

  useEffect(() => {
    setStartHour(parseInt(availableTime?.startTime?.split(":")[0]));
    setStartMin(parseInt(availableTime?.startTime?.split(":")[1]));
    setEndHour(parseInt(availableTime?.endTime?.split(":")[0]));
    setEndMin(parseInt(availableTime?.endTime?.split(":")[1]));
  }, [availableTime]);
  console.log(timeSelected,"timeSelected")
  return (
    <div className="w-full gap-y-5 h-[340px] relative flex flex-col items-center overflow-scroll scroll-hidden snap-mandatory snap-y">
      {useGenerateHours(startHour, startMin, endHour, endMin, 15).map(
        (time, index) => (
          <div
            key={index}
            className={`cursor-pointer w-full h-[40px] text-[14px] flex shrink-0 items-center justify-center rounded-[.375rem] ${
              timeSelected === time
                ? "bg-(--color-primary-100) text-white"
                : unavailableTime.includes(time)
                ? "text-[rgba(0,0,0,0.2)] bg-[#F7F7F7]"
                : "text-[rgba(0,0,0,0.8)] bg-white"
            }
          `}
            onClick={() =>
              !unavailableTime.includes(time) && handleSelectTime(time)
            }
          >
            {time}
          </div>
        )
      )}
    </div>
  );
};

export default Time;
