import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTER from "../utils/router";
import NotFound from "../pages/404/NotFound";

const Router = () => {
  const generateRoutes = (routes) => {
    return routes.map((route) => (
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
    </Routes>
  );
};

export default Router;
