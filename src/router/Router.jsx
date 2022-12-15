import React from "react";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Login from "../pages/login/Login";
import New from "../pages/new/New";
import Single from "../pages/single/Single";

export const Router = [
  {
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/users", element: <List /> },
      { path: "users/:Id", element: <Single /> },
      { path: "/product", element: <New /> },
      { path: ":productId", element: <Single /> },
      { path: ":productId", element: <Single /> },
      { path: "/new", element: <New /> },

    ],
  },
  
];
