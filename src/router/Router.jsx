import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTER from "../utils/router";
import NotFound from "../pages/404/NotFound";
import Dashboard from "../pages/manager/Dashboard";
import Partners from "../pages/manager/Partners";
import Plan from "../pages/manager/Plan";
import Advertisement from "../pages/manager/Advertisement";
import { Link, useLocation } from "react-router-dom";
import Promotion from "../pages/manager/Promotion";
import RegistrationPartners from "../pages/manager/RegistrationPartners";
import AvailablePartners from "../pages/manager/AvailablePartners";

 

const Router = () => {
  const generateRoutes = (routes) => {
    return routes.map((route, index) => (
      <Route path={route.path} element={route?.isOutlet ? route?.page : null}>
        <Route index element={route.isOutlet ? route?.subRouter[0]?.page : route.page} />
        {route.subRouter && generateRoutes(route.subRouter)}
      </Route>
    ));
  };
  return (
    <Routes>
      {generateRoutes(ROUTER)}
      <Route path="*" element={<NotFound />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/advertisement" element={<Advertisement />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/plans" element={<Plan />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/partners/registration" element={<RegistrationPartners />} />
      <Route path="/partners/available" element={<AvailablePartners />} />
    </Routes>
  );
};

export default Router;
