import React from "react";
import Home from "../pages/customer/home/Home";

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
