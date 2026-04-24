import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Filosofia from "../pages/Filosofia";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/reservas" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}