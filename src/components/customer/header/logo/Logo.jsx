import React from "react";
import IMAGES from "../../../../utils/images";

const Logo = () => {
  return (
    <div className="absolute left-[50%] translate-x-[-50%] top-[100%] translate-y-[-40%] w-[100px] h-[100px] rounded-[50%] flex justify-center items-center overflow-hidden border-[1px] border-(--color-primary-100)">
      <img src={IMAGES.logo} alt="" />
    </div>
  );
};

export default Logo;
