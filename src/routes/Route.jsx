import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import CheckOut from "../pages/checkOut/checkOut";
import Bookings from "./bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>

        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/sign-in",
          element:<Login/>
        },
        {
          path:"/sign-up",
          element:<SignUp/>,
        },
        {
          path:"/checkout/:id",
          element:<PrivetRoute><CheckOut/></PrivetRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/bookings",
          element:<PrivetRoute><Bookings/></PrivetRoute>
        }
      ]
    },
  ]);

  export default router;
