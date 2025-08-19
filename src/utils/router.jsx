import Home from "../pages/customer/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import RegistrationEmail from "../components/registration/email/RegistrationEmail";
import RegistrationForm from "../components/registration/form/RegistrationForm";
import ConfirmEmail from "../components/registration/confirm/ConfirmEmail";
import PartnerRegistration from "../pages/customer/partner-registration/PartnerRegistration";
import PartnerRegistrationForm from "../pages/customer/partner-registration/form/PartnerRegistrationForm";
import Booking from "../pages/customer/booking/Booking";
import ServiceDetail from "../pages/customer/service-detail/ServiceDetail";
import BookProcess from "../pages/customer/book-process/BookProcess";
import AuthBooking from "../middleware/AuthBooking";

const ROUTER = [
  {
    name: "customer",
    path: "/",
    page: <Home />,
    title: "Home",
    subRouter: [
      {
        name: "Partner Registration",
        path: "partner-registration",
        page: <PartnerRegistration />,
        title: "Partner Registration",
        subRouter: [
          {
            name: "Registration Form",
            path: "partner-registration-form",
            page: <PartnerRegistrationForm />,
            title: "Registration Form",
            subRouter: null,
          },
        ],
      },
      {
        name: "Booking",
        path: "booking-process",
        page: (
          <AuthBooking>
            <BookProcess />
          </AuthBooking>
        ),
        title: "Booking",
        subRouter: [],
      },
      {
        name: "Services",
        path: "services",
        page: <Booking />,
        title: "Services",
        subRouter: [
          {
            name: "Service Detail",
            path: "service-detail/:id",
            page: <ServiceDetail />,
            title: "Service Detail",
            subRouter: null,
          },
        ],
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
