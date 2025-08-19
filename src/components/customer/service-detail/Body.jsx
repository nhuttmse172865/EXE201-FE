import React, { useEffect } from "react";
import ServiceImages from "./service-image/ServiceImages";
import Information from "./information/Information";
import Description from "./description/Description";
import Location from "./location/Location";
import ServiceRelate from "./service-relate/ServiceRelate";
import { useParams } from "react-router-dom";
import axios from "axios";

const Body = () => {
  const { id } = useParams();

  useEffect(() => {
    const handleFetchServiceDetail = async () => {
      const res = await axios.get(``)
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-200px)] relative">
      <ServiceImages />
      <Information />
      <div className="container mx-auto flex gap-[20px]">
        <div className=" w-[75%]">
          <Description />
          <Location />
        </div>
        <div className=" w-[25%]">
          <ServiceRelate />
        </div>
      </div>
    </div>
  );
};

export default Body;
