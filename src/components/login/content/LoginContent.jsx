import React, { useEffect, useState } from "react";
import imgLogin from "/src/assets/images/catndog.jpg";
const LoginContent = () => {
  const [widthContent, setWidthContent] = useState();
  const [widthContainer, setWidthContainer] = useState();

  const handleWidthContentLogin = () => {
    const widthContainerlogin =
      document.getElementById("container-login")?.clientWidth;
    const widthContainerFormLogin = document.getElementById(
      "container-form-login"
    ).clientWidth;
    if (widthContainerlogin) {
      setWidthContainer(
        (window.innerWidth - widthContainerlogin) / 2 +
          (widthContainerlogin - widthContainerFormLogin)
      );
      setWidthContent(widthContainerlogin - widthContainerFormLogin - 20);
    }
  };

  window.addEventListener("resize", () => {
    handleWidthContentLogin();
  });

  useEffect(() => {
    if (!widthContent) {
      handleWidthContentLogin();
    }
  },[]);

  return (
    <div           
      className="relative bg-[rgba(0,0,0,0.1)] rounded-tl-[25px] overflow-hidden h-full"
      style={{
        width: `${widthContainer - 28}px`,
      }}
    >
     <img src={imgLogin} alt="Login Background" className="w-full h-full object-cover rounded-tl-[25px]" />
    </div>
  );
};

export default LoginContent;
