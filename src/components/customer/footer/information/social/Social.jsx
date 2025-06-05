import React from "react";
import SOCIAL_FOOTER from "../../../../../utils/social-list-footer";

const Social = () => {
  const handleOnclickSocial = (item) => {
    if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <ul className="flex justify-center items-center mt-10 gap-[20px]">
      {SOCIAL_FOOTER.map((item) => (
        <li
          className="w-[35px] h-[35px] object-contain flex justify-center items-center p-1.5 rounded-[50%] border-[1px] border-(--color-title-10) cursor-pointer"
          onClick={() => handleOnclickSocial(item)}
        >
          <img className="h-[100%]" src={item.image} alt={item.name} />
        </li>
      ))}
    </ul>
  );
};

export default Social;
