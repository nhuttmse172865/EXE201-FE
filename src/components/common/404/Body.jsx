import React from "react";

const Body = () => {
  return (
    <div class="min-h-[calc(100vh-200px)] flex justify-center items-center">
      <div className="max-w-[520px]">
        <h1 className="font-family-playfair-display text-[50px] text-(--color-primary-100) text-center font-bold mb-5">
          Oops, page not found!
        </h1>
        <p className="text-center text-[rgba(0,0,0,0.6)] text-[16px]">
          Perhaps what you are looking for has not yet arrived and therefore our
          website cannot show you information about this period.
        </p>
      </div>
    </div>
  );
};

export default Body;
