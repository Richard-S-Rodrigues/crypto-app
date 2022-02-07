import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Cryptocurrency from "./pages/Cryptocurrency";
import News from "./pages/News";

const AppRoutes = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="/cryptocurrencies/:coinId" element={<Cryptocurrency />} />
      <Route path="/news" element={<News />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
