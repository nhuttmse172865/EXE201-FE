import React, { useState } from "react";
import Calendar from "./calendar/Calendar";
import Time from "./time/Time";

const SelectDate = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedYear, setSelectedYear] = useState();
  return (
    <div className="p-[15px] bg-white rounded-[.375rem]">
      <div className="flex gap-2.5 items-center">
        <div className="w-[2px] bg-(--color-primary-100) h-[20px]"></div>
        <h1 className="font-family-playfair-display text-[18px] font-medium text-[rgba(0,0,0,0.8)]">
          Select Date
        </h1>
      </div>
      <div className="flex mt-5 gap-10">
        <div className="w-[85%] bg-[#F7F7F7] p-5 rounded-[.375rem]">
          <Calendar
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </div>
        <div className="bg-[#F7F7F7] p-5 rounded-[.375rem] w-[15%]">
            <Time />
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
