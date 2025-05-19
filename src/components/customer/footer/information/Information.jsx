import React from "react";
import Social from "./social/Social";
import CopyRight from "./copy-right/CopyRight";

const Information = () => {
  const linkStyle =
    "text-[14px] text-[rgba(0,0,0,0.5)] cursor-pointer hover:text-[rgba(0,0,0,0.7)]";
  const navigationItemsTop = ["PARTNERS", "SERVICES", "HOW TO USE"];
  const navigationItemsBottom = [
    "CAREERS",
    "BE PARTNER",
    "HELP CENTER",
    "FAQ",
    "CONTACT US",
    "ABOUT US",
  ];
  return (
    <div className="container mx-auto py-10">
      <h4 className="text-center font-family-playfair-display text-[2.5rem] font-bold text-[#333] mb-10">
        FBase
      </h4>
      <nav>
        <ul className="text-center flex justify-center gap-10 border-b border-gray-200 pb-2.5">
          {navigationItemsTop.map((item) => (
            <li key={item} className={linkStyle}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="text-center flex justify-center gap-10 mt-2.5">
          {navigationItemsBottom.map((item) => (
            <li key={item} className={linkStyle}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <Social />
      <CopyRight />
    </div>
  );
};

export default Information;
