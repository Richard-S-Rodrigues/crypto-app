import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Exchanges from "./pages/Exchanges";
import News from "./pages/News";

const AppRoutes = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/news" element={<News />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
