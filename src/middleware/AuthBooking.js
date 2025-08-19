import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthBooking = ({ children }) => {
  const navigate = useNavigate();

  const checkUserAuthentication = () => {
    const token = sessionStorage.getItem("token");
    return !!token;
  };

  if (!checkUserAuthentication) {
    navigate("/login");
    return;
  }
  return children;
};

AuthBooking.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthBooking;
