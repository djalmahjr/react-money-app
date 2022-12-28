import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import FormBalance from "./views/FormBalance";
import ListMarket from "./views/ListMarket";
import Home from "./views/Home";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/list-market",
      element: <ListMarket />,
    },
    {
      path: "/form-balance",
      element: <FormBalance />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
}
