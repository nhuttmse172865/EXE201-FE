import Payment from "../components/customer/book-process/payment/Payment";
import SelectClinic from "../components/customer/book-process/select-clinic/SelectClinic";
import SelectDate from "../components/customer/book-process/select-date/SelectDate";
import SelectService from "../components/customer/book-process/select-service/SelectService";

const PROGRESS_BOOKING = [
  {
    id: 1,
    name: "Select Service",
    component: <SelectService />,
  },
  {
    id: 2,
    name: "Select Clinic",
    component: <SelectClinic />,
  },
  {
    id: 3,
    name: "Select Date",
    component: <SelectDate />,
  },
  {
    id: 4,
    name: "Payment",
    component: <Payment />,
  },
  {
    id: 5,
    name: "Confirm",
     component: null,
  },
];

export default PROGRESS_BOOKING;
