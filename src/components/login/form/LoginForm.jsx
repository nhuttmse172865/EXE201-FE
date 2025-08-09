import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ElevatedButton from "../../common/button/elevated-button/ElevatedButton";
import VALIDATE from "../../../utils/validate";
import IMAGES from "../../../utils/images";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInCorrect, setEmailInCorrect] = useState(false);
  const [messageErrorEmail, setMessageEmailError] = useState("");
  const [passwordInCorrect, setPasswordInCorrect] = useState(false);
  const [messageErrorPassword, setMessageErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleValidateEmail = (value) => {
    if (!value) {
      setEmailInCorrect(true);
      setMessageEmailError("Email must not be empty!");
    } else if (!VALIDATE.validateEmail(value)) {
      setEmailInCorrect(true);
      setMessageEmailError("Email format is invalid!");
    } else {
      setEmailInCorrect(false);
      setMessageEmailError("");
    }
  };

  const handleValidatePassword = (value) => {
    if (!value) {
      setPasswordInCorrect(true);
      setMessageErrorPassword("Password must not be empty!");
    } else {
      setPasswordInCorrect(false);
      setMessageErrorPassword("");
    }
  };

  const handleLogin = async () => {
    handleValidateEmail(email);
    handleValidatePassword(password);

    if (emailInCorrect || passwordInCorrect) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/account/signIn", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const token = await res.text();
        console.log(token);
        // ✅ Login thành công
        localStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("token", token);
        navigate("/");
      } else {
        // ❌ Sai thông tin đăng nhập
        const message = await res.text();
        setPasswordInCorrect(true);
        setMessageErrorPassword(message || "Invalid credentials");
      }
    } catch (error) {
      setPasswordInCorrect(true);
      setMessageErrorPassword("Server error. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const classInputEmail = `h-[48px] border-[1px] ${
    emailInCorrect ? "border-red-400" : "border-(--color-title-20)"
  } rounded-[.375rem] text-(--color-title-100) text-[15px]`;

  const classInputPassword = `h-[48px] border-[1px] ${
    passwordInCorrect ? "border-red-400" : "border-(--color-title-20)"
  } rounded-[.375rem] text-(--color-title-100) text-[15px]`;

  return (
    <div className="grid items-center relative top-[50%] translate-y-[-50%] max-w-[360px]">
      <div>
        <p className="mb-5 text-(--color-primary-100) text-[14px]">Login</p>
        <h1 className="font-family-playfair-display text-3xl text-(--color-title-100)">
          Welcome to FBase!
        </h1>
        <p className="text-[14px] text-(--color-title-50) mt-1.5 mb-10 line-clamp-2">
          Unlock personalized recommendations, book services, and manage your
          pet's needs—all in one place.
        </p>
      </div>
      <div>
        <div className="grid mb-4">
          <label className="text-[14px] mb-0.5 text-(--color-title-60)">
            Email
          </label>
          <input
            className={classInputEmail}
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => handleValidateEmail(e.target.value)}
          />
          {emailInCorrect && (
            <p className="text-[13px] mt-0.5 text-red-400">
              {messageErrorEmail}
            </p>
          )}
        </div>
        <div className="grid mb-7">
          <label className="text-[14px] mb-0.5 text-(--color-title-60)">
            Password
          </label>
          <input
            className={classInputPassword}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => handleValidatePassword(e.target.value)}
          />
          {passwordInCorrect && (
            <p className="text-[13px] mt-0.5 text-red-400">
              {messageErrorPassword}
            </p>
          )}
          <p className="text-[13px] mt-2 text-end text-(--color-title-50) cursor-pointer hover:text-(--color-title-70) ease-in duration-300">
            Forgot password ?
          </p>
        </div>
        <ElevatedButton
          text={loading ? "Logging in..." : "Login"}
          height={"48px"}
          rounded={".375rem"}
          handleOnclick={handleLogin}
        />
      </div>

      <div className="flex items-center justify-between gap-x-[10px] max-w-[380px] text-[rgba(0,0,0,0.2)] mt-[30px]">
        <div className="h-[0.5px] bg-[rgba(0,0,0,0.2)] w-full"></div>or
        <div className="h-[0.5px] bg-[rgba(0,0,0,0.2)] w-full"></div>
      </div>

      <div className="cursor-pointer h-[48px] bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.1)] rounded-[0.375rem] max-w-[380px] flex justify-center items-center gap-[15px] mt-[30px] mb-[70px] ease-in duration-300">
        <img src={IMAGES.googleIcon} className="max-h-[100%] h-[24px]" />
        <span className="text-[14px] text-[rgba(0,0,0,0.7)] translate-y-[1px]">
          Sign in with Google
        </span>
      </div>

      <p className="text-[14px] text-(--color-title-50)">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/registration")}
          className="text-(--color-primary-80) hover:text-(--color-primary-100) ease-in duration-300 font-semibold cursor-pointer"
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
