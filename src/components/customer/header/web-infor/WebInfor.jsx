import React from "react";
import { NAVIGATION_CUSTOMER_HEADER as navigationList } from "../../../../utils/navigation-customer-header";
import { useNavigate } from "react-router-dom";

const WebInfor = () => {
  const navigate = useNavigate()

  const hanldeOnClickNavigation = (item) => {
    navigate(item.url)
  }

  return (
    <ul className="flex gap-x-[40px] text-[14px] font-normal text-[rgba(0,0,0,0.6)]">
      {navigationList.map((item, _) => (
        <li onClick={() => hanldeOnClickNavigation(item)} className="cursor-pointer hover:text-[rgba(0,0,0,0.8)] ">{item.name}</li>
      ))}
    </ul>
  );
};

export default WebInfor;
