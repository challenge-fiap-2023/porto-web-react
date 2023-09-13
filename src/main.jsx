import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Circle } from 'react-preloaders';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPage from "./pages/Public/LoginPage/LoginPage";
import HomePage from "./pages/Public/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <><RouterProvider router={router} /><Circle time={1000} color={'rgb(38, 98, 200)'} /></>
);