import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTER from "../utils/router";
import NotFound from "../pages/404/NotFound";
import Dashboard from "../pages/manager/Dashboard";
import Partners from "../pages/manager/Partners";
import Plan from "../pages/manager/Plan";
import Advertisement from "../pages/manager/Advertisement";
import Promotion from "../pages/manager/Promotion";
import RegistrationPartners from "../pages/manager/RegistrationPartners";
import AvailablePartners from "../pages/manager/AvailablePartners";
import RegistrationForm from "../pages/partner/RegistrationForm"; 
import DashboardPartner from "../pages/partner/DashboardPartner";
import ServicePartner from "../pages/partner/ServicePartner";
import HospitalClinicPartner from "../pages/partner/HospitalClinicPartner";
import DoctorPartner from "../pages/partner/DoctorPartner";
import ReportBooking from "../pages/doctor/ReportBooking";
import AccountSettings from "../pages/doctor/AccountSettings";
import ReportConsult from "../pages/doctor/ReportConsult";
import MessageCustomer from "../pages/doctor/MessageCustomer";
import ShopPet  from "../pages/customer/shop/ShopPet"; 
import DetailProduct from "../pages/customer/shop/DetailProduct";
import Cart from "../pages/customer/shop/Cart";

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
      <Route path="/partnersforms" element={<RegistrationForm />} />
      <Route path="/dashboard-partner" element={<DashboardPartner />} />
      <Route path="/service-partner" element={<ServicePartner />} />
      <Route path="/hospitalclinic-partner" element={<HospitalClinicPartner />} />
      <Route path="/doctor-partner" element={<DoctorPartner/>} />
      <Route path="/reportbooking-doctor" element={<ReportBooking />} />
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route path="/reportconsult-doctor" element={<ReportConsult />} />
      <Route path="/message-doctor" element={<MessageCustomer />} />
      <Route path="/shoppet" element={<ShopPet />} />
<Route path="/product/:productId" element={<DetailProduct />} />
<Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
