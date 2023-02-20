import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import IndexAuth from "./Pages/Auth/Index/Index";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Index from "./Pages/Index/Index";
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";
import NotFound from "./Pages/Not Found/NotFound";

import "./index.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ]
  },
  {
    path: "/Auth",
    element: <IndexAuth />,
    children: [
      {
        path: "register",
        element: <Register />,
      }, {
        path: "login",
        element: <Login />,
      },
    ]
  },

  {
    path: '*',
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
