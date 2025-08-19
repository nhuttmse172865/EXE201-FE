import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ElevatedButton from "../../common/button/elevated-button/ElevatedButton";
import BASE from "../../../utils/base";

const ConfirmEmail = () => {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const classInputCode = `h-[48px] border-[1px] ${
    error ? "border-red-500" : "border-(--color-title-20)"
  } rounded-[.375rem] text-(--color-title-100) text-[15px]`;

  const handleVerify = async () => {
    try {
      const res = await fetch(
        `${BASE.BASE_URL}/account/signUp?code=${otp}`,
        {
          method: "POST",
          credentials: "include", // cần thiết để giữ session
        }
      );

      if (res.ok) {
        navigate("/");
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Xác thực lỗi:", err);
      setError(true);
    }
  };

  return (
    <div className="grid items-start mt-24 max-w-[350px]">
      <div className="mb-2">
        <p className="mb-5 text-(--color-primary-100) text-[14px]">Register</p>
        <h1 className="font-family-playfair-display text-3xl text-(--color-title-100)">
          Confirm your email address
        </h1>
        <p className="text-[14px] text-(--color-title-50) mt-1.5">
          We sent an email to{" "}
          <span className="text-(--color-title-100)">{email}</span>. Please
          confirm your email address by entering the code
        </p>
      </div>

      <div className="grid mb-10 mt-5">
        <label className="text-[14px] mb-0.5 text-(--color-title-60)">
          Code<span className="text-red-500">*</span>
        </label>
        <input
          className={classInputCode}
          type="number"
          placeholder="Enter Code"
          value={otp}
          onChange={(event) => {
            setOTP(event.target.value);
            setError(false);
          }}
        />
        {error && (
          <p className="text-[13px] mt-0.5 text-red-400">Code is invalid!</p>
        )}
      </div>

      <ElevatedButton
        text="Verify"
        height="48px"
        rounded="0.375rem"
        handleOnclick={handleVerify}
      />
    </div>
  );
};

export default ConfirmEmail;
