import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActiveSectionProvider>
      <RouterProvider router={router} />
    </ActiveSectionProvider>
  </React.StrictMode>
);
