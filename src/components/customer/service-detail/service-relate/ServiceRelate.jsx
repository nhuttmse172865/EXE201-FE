import React from "react";
import Item from "./item/Item";
import ElevatedButton from "../../../common/button/elevated-button/ElevatedButton";
import OutlineButton from "../../../common/button/outline-button/OutlineButton";

const ServiceRelate = () => {
  return (
    <div className="mt-8">
      <div className="flex gap-1.5 items-start">
        <div className="w-[3px] h-[24px] bg-(--color-primary-100)"></div>
        <h4 className="font-family-playfair-display text-[17px] font-medium text-[rgba(0,0,0,0.8)]">
          SERVICE RELATED
        </h4>
      </div>
      <div className="mt-11 flex flex-col gap-8">
        <Item />
        <Item />
        <Item />
        <OutlineButton text={"See More"} height={45} width={200} />
      </div>
    </div>
  );
};

export default ServiceRelate;
