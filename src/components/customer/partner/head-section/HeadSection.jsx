import React, { useRef } from "react";
import Content from "./content/Content";
import useIsInViewport from "../../../../hooks/useIsInViewport";

const HeadSection = () => {
  const headSectionRef = useRef(null);
  const inView = useIsInViewport(headSectionRef, { threshold: 0.1 });
  return (
    <section
      className={`morph-in-item ${inView ? "morph-in-active" : ""}`}
      style={{
        height: "calc(100vh - 70px)",
      }}
      ref={headSectionRef}
    >
      <Content />
    </section>
  );
};

export default HeadSection;
