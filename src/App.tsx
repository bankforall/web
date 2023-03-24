import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "@/screens/Home"
import Dashboard from "@/screens/Dashboard"
import PeerShareRoom from "@/screens/PeerShareRoom"
import Login from "@/screens/Login"
import Register from "@/screens/Register"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/peershare-room", element: <PeerShareRoom /> },
  { path: "/dashboard", element: <Dashboard />, },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
