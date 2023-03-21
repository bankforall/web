import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PeerShareRoom from "./pages/PeerShareRoom";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peer-share-room" element={<PeerShareRoom />} />
    </Routes>
  );
};

export default App;
