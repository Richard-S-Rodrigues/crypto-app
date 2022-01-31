import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";

import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";

const AppRoutes = () => (
  <BrowserRouter>
    <SideBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
