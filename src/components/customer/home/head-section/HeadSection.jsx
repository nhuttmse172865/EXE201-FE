import React, { useEffect, useRef, useState } from "react";
import Content from "./content/Content";
import useIsInViewport from "../../../../hooks/useIsInViewport";

const HeadSection = () => {
  const headSectionRef = useRef(null);
  const inView = useIsInViewport(headSectionRef, { threshold: 0.1 });
  return (
    <div
      className={`relative h-[calc(100vh-78px)]  morph-in-item ${
        inView ? "morph-in-active" : ""
      }`}
      ref={headSectionRef}
    >
      <Content />
    </div>
  );
};

export default HeadSection;
