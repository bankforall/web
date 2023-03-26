import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Welcome from "@/screens/Welcome";
import Dashboard from "@/screens/Dashboard";
import PeerShareRoom from "@/screens/PeerShareRoom";
import PeerSharingDashboard from "@/screens/PeerSharingDashboard";
import Login from "@/screens/Login";
import Register from "@/screens/Register";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/peershare-room", element: <PeerShareRoom /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/peershare-dashboard", element: <PeerSharingDashboard /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
