import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import ProductPage from './../pages/Products/ProductPage';
import ContactPage from './../pages/Contact/ContactPage';
import AboutPage from './../pages/About/AboutPage';

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
    ],
  },
]);
