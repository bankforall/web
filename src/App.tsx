import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Welcome from "@/screens/Welcome"
import Dashboard from "@/screens/Dashboard"
import PeerShareRoom from "@/screens/PeerShareRoom"
import WonBidding from "@/screens/WonBidding"
import Login from "@/screens/Login"
import Register from "@/screens/Register"
import PeerSharingDashboard from "@/screens/peerSharingDashboard";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/peershare-room", element: <PeerShareRoom /> },
  { path: "/dashboard", element: <Dashboard />, },
  { path: "/peershare-dashboard", element: <PeerSharingDashboard />},
  { path: "/won-bidding", element: <WonBidding />}
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
