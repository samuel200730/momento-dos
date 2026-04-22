import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Filosofia from "../pages/Filosofia";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/filosofia" element={<Filosofia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;