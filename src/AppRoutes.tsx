import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";

import Home from "./pages/Home";

const AppRoutes = () => (
  <BrowserRouter>
    <SideBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
