import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserContextProvider } from "./context/userContext";

import IndexAuth from "./Pages/Auth/Index/Index";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Index from "./Pages/Index/Index";
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";
import Notes from "./Pages/Notes/Notes";
import Dates from "./Pages/Dates/Dates";
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
        path: "/",
        element: <Contacts />,
      },
      {
        path: "/dates",
        element: <Dates />,
      },
      {
        path: "/notes",
        element: <Notes />,
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
  <UserContextProvider>
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  </UserContextProvider>
);
