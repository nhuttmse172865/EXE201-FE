import React from "react";
import Title from "./title/Title";
import Content from "./content/Content";
import OutlineButton from "../../../common/button/outline-button/OutlineButton";

const FeaturedService = () => {
  return (
    <div className="mt-28 container mx-auto">
      <Title />
      <Content />
      <div className="pt-10 flex justify-center items-center">
        <OutlineButton
          text="Show more"
          width="120px"
          height="40px"
          borderColor="rgba(0,0,0,0.1)"
          color="rgba(0,0,0,0.5)"
        />
      </div>
    </div>
  );
};

export default FeaturedService;
