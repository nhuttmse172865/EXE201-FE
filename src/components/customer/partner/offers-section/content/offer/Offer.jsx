import React, { useEffect, useState } from "react";
import OFFER_LIST from "../../../../../../utils/offer-list";
import imgOffer from "../../../../../../assets/images/offer-dog.jpg";
const Offer = () => {
  const [widthMargin, setWidthMargin] = useState();

  const handleWidthContentOffer = () => {
    const widthContainerOfferSection = document.getElementById(
      "container-offer-section"
    )?.clientWidth;
    if (widthContainerOfferSection) {
      setWidthMargin(window.innerWidth - widthContainerOfferSection);
    }
  };

  window.addEventListener("resize", () => {
    handleWidthContentOffer();
  });
  useEffect(() => {
    if (!widthMargin) {
      handleWidthContentOffer();
    }
  }, []);

  return (
    <div className="mt-10 flex gap-5 h-[600px]">
      <div className="w-[55%] relative">
        <div
          className="bg-[rgba(0,0,0,0.1)] h-full right-0 absolute top-0 rounded-[30px]"
          style={{
            width: `calc(100% + ${widthMargin}px)`,
          }}
        >
          <img src={imgOffer} alt="Offer Background" className="w-full h-full object-cover rounded-[30px]" />
        </div>
      </div>

      <div className="w-[45%] pl-10 flex flex-col gap-10 h-full items-center justify-center">
        {OFFER_LIST.map((item, index) => (
          <div className="w-full flex gap-10 items-start">
            <div className="w-[40px] h-[40px] border-[1px] text-[15px] border-(--color-primary-50) rounded-full flex justify-center items-center">
                
            </div>
            <div style={{ width: `calc(100% - 80px - 40px)` }}>
              <h4 className="font-family-playfair-display text-[18px] text-[rgba(0,0,0,0.7)] font-medium" >
                {item.name}
              </h4>
              <p className="text-[13px] text-[rgba(0,0,0,0.5)] mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
