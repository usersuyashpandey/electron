import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Forecast from "./Apps/Forecast";
import Bhp from "./Apps/BHP/BHP";
import Layout from "./components/Layout/Layout";

const AppRoute: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "forecast",
          element: <Forecast />,
        },
        {
          path: "bhp",
          element: <Bhp />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} fallbackElement={<CircularProgress />} />
  );
};

export default AppRoute;
