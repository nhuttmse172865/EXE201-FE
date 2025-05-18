import React from "react";
import IMAGES from "../../../../utils/images";

const Logo = () => {
  return (
    <div className="absolute left-[50%] translate-x-[-50%] top-[100%] translate-y-[-50%] w-[120px] h-[120px] rounded-[50%] flex justify-center items-center overflow-hidden">
      <img src={IMAGES.logo} alt="" />
    </div>
  );
};

export default Logo;
