import React, { useEffect, useState } from "react";
import Calendar from "./calendar/Calendar";
import Time from "./time/Time";
import useLocalStorage from "use-local-storage";
import useGenerateHours from "../../../../hooks/useGenerateHours";
import axios from "axios";
import BASE from "../../../../utils/base";

const formatNumber = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
};

const SelectDate = () => {
  const [booking, setBooking] = useLocalStorage("booking", "");
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  const [timeSelected, setTimeSelected] = useState();
  const [unavailableTimes, setUnavailableTimes] = useState([]);
  const [availableTime, setAvailableTime] = useState([]);

  const fetchUnavailableTimes = async () => {
    try {
      const response = await axios.get(
        `${BASE.BASE_URL}/api/business-times/hospital/${
          booking?.clinic?.id
        }/service/${booking?.service?.id}/date/${selectedYear}-${formatNumber(
          selectedMonth + 1
        )}-${formatNumber(selectedDate)}`
      );
      const freeTimeSlots = response.data;
      const unavailableTimes = [];
      setAvailableTime({
        startTime: freeTimeSlots[0]?.startTime,
        endTime: freeTimeSlots[freeTimeSlots?.length - 1]?.endTime,
      });
      for (let i = 1; i < freeTimeSlots?.length - 1; i++) {
        const startTime = freeTimeSlots[i]?.startTime;
        const endTimePrev = freeTimeSlots[i - 1]?.endTime;
        unavailableTimes.push({
          startTime: endTimePrev,
          endTime: startTime,
        });
      }
      setUnavailableTimes(unavailableTimes);
    } catch (error) {}
  };
  useEffect(() => {
    if (
      `${selectedYear}-${formatNumber(selectedMonth + 1)}-${formatNumber(
        selectedDate
      )}` === booking?.date
    ) {
      fetchUnavailableTimes();
      setTimeSelected(booking?.time);
    } else {
      setTimeSelected();
      fetchUnavailableTimes();
      setBooking({
        service: booking.service,
        clinic: booking.clinic,
        date: `${selectedYear}-${formatNumber(
          selectedMonth + 1
        )}-${formatNumber(selectedDate)}`,
        time: null,
      });
    }
  }, [selectedDate, selectedMonth, selectedYear]);

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
          <Time
            unavailableTimes={unavailableTimes}
            availableTime={availableTime}
            timeSelected={timeSelected}
            setTimeSelected={setTimeSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
