import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import FormBalance from "./views/FormBalance";
import MarketList from "./views/MarketList";
import Home from "./views/Home";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/list-market",
      element: <MarketList />,
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
