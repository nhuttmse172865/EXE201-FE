import React from "react";
import POLICY_LIST from "../../../../../utils/policy-list-footer";
import { useNavigate } from "react-router-dom";

const CopyRight = () => {
  const navigate = useNavigate();

  const handleOnClick = (item) => {
    navigate(item.url);
  };

  return (
    <div className="mt-15">
      <ul className="flex justify-center items-center gap-[20px]">
        {POLICY_LIST.map((item) => (
          <li
            className="text-[14px] text-[rgba(0,0,0,0.5)] cursor-pointer hover:text-[rgba(0,0,0,0.7)]"
            onClick={() => handleOnClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <p className="text-center text-[14px] text-[rgba(0,0,0,0.5)] mt-1">
        Copyright © 2025 FBase, Ltd. All rights reserved.
      </p>
    </div>
  );
};

export default CopyRight;
