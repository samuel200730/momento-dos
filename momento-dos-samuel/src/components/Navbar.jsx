import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* 👇 ESTE ES EL CAMBIO */}
      <h2>
        <Link to="/">ZENITH BONSAI</Link>
      </h2>

      <ul>
        <li>
          <Link to="/filosofia">Filosofía</Link>
        </li>

        <li>
          <Link to="/gallery">Galería</Link>
        </li>

        <li>
          <Link to="/contact">Reservas</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;