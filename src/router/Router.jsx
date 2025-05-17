import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTER from "../utils/router";
import NotFound from "../pages/404/NotFound";

const Router = () => {
  const generateRoutes = (routes) => {
    return routes.map((route) => (
      <Route path={route.path}>
        <Route index element={route.page} />
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
