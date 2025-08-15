import React from "react";

import ServiceInfor from "./service-infor/ServiceInfor";
import ClinicInfor from "./clinic-infor/ClinicInfor";
import TimeInfor from "./time-infor/TimeInfor";
import Total from "./total/Total";
import OutlineButton from "../../../common/button/outline-button/OutlineButton";
import ElevatedButton from "../../../common/button/elevated-button/ElevatedButton";

const BookInformation = ({handleNextStep, handlePreviousStep}) => {
  return (
    <div>
      <ServiceInfor />
      <ClinicInfor />
      <TimeInfor />
      <Total />
      <div className="mt-5 flex gap-x-10">
        <OutlineButton text={"Previous"} width={"50%"} height={45} handleOnclick={() => handlePreviousStep()}  />
        <ElevatedButton text={"Next"} width={"50%"} height={45} handleOnclick={() => handleNextStep()}/>
      </div>
    </div>
  );
};

export default BookInformation;
