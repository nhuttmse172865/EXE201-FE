import React, { useRef } from "react";
import Title from "./title/Title";
import Content from "./content/Content";
import useIsInViewport from "../../../../hooks/useIsInViewport";

const FAQ = () => {
  const FAQSectionRef = useRef(null);
  const inView = useIsInViewport(FAQSectionRef, { threshold: 0.1 });
  return (
    <div
      className={`mx-auto container mb-28 morph-in-item ${
        inView ? "morph-in-active" : ""
      }`}
      ref={FAQSectionRef}
    >
      <Title />
      <Content />
    </div>
  );
};

export default FAQ;
