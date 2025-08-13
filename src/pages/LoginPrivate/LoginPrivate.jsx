 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";
import "./LoginPrivate.css";
import { getRoleFromToken } from "./jwtHelper";

const LoginPrivate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!captchaValue) {
      toast.error("Please complete the captcha.");
      return;
    }
    if (!email || !password) {
      toast.error("Missing Email or Password");
      return;
    }

    try {
      const response = await login(email, password);

      if (response?.status === 200) {
        const { token, refreshToken } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);

        const role = getRoleFromToken(token);
        if (role === "User") {
          alert("Oke bạn nay User ne");
          navigate("/");
          window.location.reload();
        } else if (role === "Admin") {
          alert("Oke bạn nay Admin ne");
          navigate("/");
        }
      }
    } catch (error) {
      const status = error?.response?.status;

      if (status === 403) {
        swal({
          title: "Banned",
          text: "Your account has been banned indefinitely and cannot log in.",
          icon: "error",
          buttons: {
            ok: { text: "OK", value: true, className: "swal-ok-button" },
          },
        });
      } else if (status === 400) {
        swal({
          title: "Incorrect Account or Password",
          text: "Please check your email or password to login again.",
          icon: "error",
          buttons: {
            ok: { text: "OK", value: true, className: "swal-ok-button" },
          }});
      } else {
        console.error("Login failed:", status, error);
        toast.error("Login failed. Please try again.");
      }
    }
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleOnClick = () => { window.location.href = "/loginprivate"; };

  return (
    <>
      <header>
        <div>
          <div className="logo-mandb" onClick={handleOnClick}>
            <h3>PetCare</h3>
          </div>
          <div className="line"></div>
          <h3 className="text-login">Login</h3>
        </div>
      </header>

      <div className="head-content">
        <img src="/src/assets/images/login-private.jpg" alt="" />
        <div className="content">
          <form className="form-login" onSubmit={handleLogin}>
            <h3 className="text-welcome">Welcome</h3>

            <div>
              <label>Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="Recapcha">
              <ReCAPTCHA
                sitekey="6LeOW-gpAAAAAIjpbDvMlkseUc96hpxAWvxDofYQ"
                onChange={(val) => setCaptchaValue(val)}
              />
            </div>

 
            <input className="button-login" type="submit" value="Login" />
 
          </form>
        </div>
      </div>

      <div className="footer-login">
        <div>
          <h2></h2>
          <div>
            <ul>
              <h3>Reach us</h3>
              <li><img src="/src/assets/phone.svg" alt="" /><span>+843899999999</span></li>
              <li><img src="/src/assets/email.svg" alt="" /><span>petcare@gmail.com</span></li>
              <li><img src="/src/assets/location.svg" alt="" /><span>Long Thanh My, Thu Duc, Ho Chi Minh, Viet Nam</span></li>
            </ul>
            <ul>
              <h3>Company</h3>
              <li>About</li>
              <li>Contact us</li>
            </ul>
            <ul>
              <h3>Legal</h3>
              <li>Privacy Policy</li>
              <li>Terms & Services</li>
              <li>Terms Of Use</li>
            </ul>
            <ul>
              <h3>Useful links</h3>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <img src="/src/assets/face.svg" alt="" />
            <img src="/src/assets/insta.svg" alt="" />
            <img src="/src/assets/twitter.svg" alt="" />
          </div>
          <div className="line-end"></div>
          <h5>Copyright&copy; : petcare@gmail.com</h5>
        </div>
      </div>
    </>
  );
};

export default LoginPrivate;
