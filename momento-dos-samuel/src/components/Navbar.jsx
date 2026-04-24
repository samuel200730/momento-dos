import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        ZENITH BONSAI
      </NavLink>

      <div className="nav-links">
        <NavLink to="/filosofia">Filosofía</NavLink>
        <NavLink to="/galeria">Galería</NavLink>
        <NavLink to="/reservas">Reservas</NavLink>
      </div>
    </nav>
  );
}