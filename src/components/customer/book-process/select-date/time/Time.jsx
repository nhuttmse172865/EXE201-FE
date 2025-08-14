import React, { useState } from "react";
import useGenerateHours from "../../../../../hooks/useGenerateHours";

const Time = () => {
  const times = useGenerateHours(1, 0, 23, 0, 15);
  const [timeSelected, setTimeSelected] = useState();
  const [timeUnavailable, setTimeUnavailable] = useState(["14:00", "13:00"]);
  return (
    <div className="w-full gap-y-5 h-[340px] relative flex flex-col items-center overflow-scroll scroll-hidden snap-mandatory snap-y">
      {times.map((time, index) => (
        <div
          key={index}
          className={`cursor-pointer w-full h-[40px] text-[14px] flex shrink-0 items-center justify-center rounded-[.375rem] ${
            timeSelected === time
              ? "bg-(--color-primary-100) text-white"
              : timeUnavailable.includes(time)
              ? "text-[rgba(0,0,0,0.2)] bg-[#F7F7F7]"
              : "text-[rgba(0,0,0,0.8)] bg-white"
          }
          `}
          onClick={() => !timeUnavailable.includes(time) && setTimeSelected(time)}
        >
          {time}
        </div>
      ))}
    </div>
  );
};

export default Time;
