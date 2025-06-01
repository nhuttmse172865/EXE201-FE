import React from "react";
import Home from "../pages/customer/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import RegistrationEmail from "../components/registration/email/RegistrationEmail";
import RegistrationForm from "../components/registration/form/RegistrationForm";
import ConfirmEmail from "../components/registration/confirm/ConfirmEmail";

const ROUTER = [
  {
    name: "customer",
    path: "/",
    page: <Home />,
    title: "Home",
    subRouter: [
      {
        name: "",
        path: "",
        page: "",
        title: "",
        subRouter: null,
      },
    ],
  },
  {
    name: "login ",
    path: "/login",
    page: <Login />,
    title: "Login",
    subRouter: [
      {
        name: "",
        path: "",
        page: "",
        title: "",
        subRouter: null,
      },
    ],
  },
  {
    name: "Registration",
    path: "/registration",
    page: <Registration />,
    title: "Login",
    isOutlet: true,
    subRouter: [
      {
        name: "",
        path: "",
        page: <RegistrationForm />,
        title: "",
        subRouter: null,
      },
      {
        name: "",
        path: "email",
        page: <RegistrationEmail />,
        title: "",
        subRouter: null,
      },
      {
        name: "",
        path: "confirm-email",
        page: <ConfirmEmail />,
        title: "",
        subRouter: null,
      },
    ],
  },
  {
    name: "partner",
    path: "",
    page: "",
  },
  {
    name: "doctor",
    path: "",
    page: "",
  },
  {
    name: "manager",
    path: "",
    page: "",
  },
];

export default ROUTER;
