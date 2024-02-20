import { RouteObject, createBrowserRouter } from "react-router-dom";
import {
  Root,
  ErrorPage,
  Home,
  Facility,
  Services,
  Reining,
  Breeding,
  Contact,
  HoreseForSale,
} from ".";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/facility",
    element: <Facility />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/breeding",
    element: <Breeding />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/horses-for-sale",
    element: <HoreseForSale />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    errorElement: <Home />,
    children: routes,
  },
]);
