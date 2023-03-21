import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/screens/Home";
import PeerShareRoom from "./screens/PeerShareRoom";
import Login from "@/screens/Login";
import Register from "@/screens/Register";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peer-share-room" element={<PeerShareRoom />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
