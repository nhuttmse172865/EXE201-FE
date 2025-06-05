import React from "react";
import InputText from "../../../../common/input/InputText";
import ElevatedButton from "../../../../common/button/elevated-button/ElevatedButton";
import Clinics from "./clinics/Clinics";

const Content = () => {
  return (
    <div className="absolute w-[100%] h-[100%] top-[2vh] left-0">
      <div className="h-[100%] flex flex-col justify-center items-center">
        <h1 className="font-family-playfair-display text-[40px] w-[45vw] text-center mb-5 text-(--color-title-100)">
          FBase connects you to trusted pet care services and reputable clinics.
        </h1>
        <p className="w-[30vw] text-[14px] text-center text-[rgba(0,0,0,0.5)]">
          From booking assistance to service inquiries, our friendly support
          team is available to ensure a smooth experience for you and your pet.
        </p>
        <div className="mt-10 flex gap-x-[20px]">
          <InputText placeholder="Search services or clinics (e.g., grooming, vaccination)..." />
          <ElevatedButton
            text="FIND CLINICS"
            width="140px"
            fontSize="15px"
            color="#FFFFFF"
          />
        </div>
        <div className="mx-auto container h-[150px] mt-20 overflow-hidden flex justify-center gap-[20px]">
              <Clinics />
              <Clinics />
              <Clinics />
              <Clinics />
              <Clinics />
        </div>
      </div>
    </div>
  );
};

export default Content;
