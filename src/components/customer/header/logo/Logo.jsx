import React from "react";
import IMAGES from "../../../../utils/images";

const Logo = ({ border = true }) => {
  const classLogo = `absolute left-[50%] translate-x-[-50%] top-[100%] translate-y-[-40%] ${
    border ? "w-[100px]" : "w-[120px]"
  } ${
    border ? "h-[100px]" : "h-[120px]"
  } rounded-[50%] flex justify-center items-center overflow-hidden ${
    border ? "border-[1px] border-(--color-primary-100)" : null
  }`;

  return (
    <div className={classLogo}>
      <img src={IMAGES.logo} alt="" />
    </div>
  );
};

export default Logo;
