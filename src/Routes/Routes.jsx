import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/Checkout/CheckOut";
import UserBookings from "../Pages/UserBookings/UserBookings";
import PrivetRoute from "./PrivetRoute";
import ContactUs from "../Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`https://car-doctor-server-nine-brown.vercel.app/services/${params.id}`)
      },
      {
        path: '/userbookings',
        element: <PrivetRoute><UserBookings></UserBookings></PrivetRoute>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      }

    ],
  },
]);

export default router;
