import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import ProductPage from './../pages/Products/ProductPage';
import ContactPage from './../pages/Contact/ContactPage';
import AboutPage from './../pages/About/AboutPage';
import LoginPage from "../pages/Login/LoginPage";
import Register from './../pages/Register/Register';
import Dashboard from "../layouts/DashLayout/Dashboard";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../pages/DashboardPages/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/contacts",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'/dashboard/overview',
        element:<Overview/>
      }
    ]
  }
]);
