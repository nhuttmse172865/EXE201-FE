import React, { useEffect, useState } from "react";
import Item from "./item/Item";
import axios from "axios";
import BASE from "../../../../../utils/base";

const Service = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [activePage, setActivePage] = useState();
  const [services, setServices] = useState([]);

  const handleFetchServicesData = async () => {
    try {
      const res = await axios.get(`${BASE.BASE_URL}/api/hospitalservices/all`);
      setServices(res.data);
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };

  useEffect(() => {
    handleFetchServicesData();
  }, []);
  return (
    <div>
      <div className="mt-11 grid grid-cols-4 gap-11">
        {services && services.map((item) => <Item item={item}/>)}
      </div>
      <div className="w-full mt-11 flex justify-center gap-5">
        {Array.from({ length: pageNumber }).map((_, index) => (
          <div
            className="w-[35px] h-[35px] bg-[rgba(0,0,0,0.1)] flex justify-center items-center rounded-[.375rem] text-[14px] text-[rgba(0,0,0,0.7)] cursor-pointer"
            onClick={() => setActivePage(index + 1)}
            style={{
              background:
                activePage === index + 1 ? "var(--color-primary-100)" : null,
              color: activePage === index + 1 ? "rgba(255,255,255,1)" : null,
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
