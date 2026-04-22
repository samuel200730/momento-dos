import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>ZENITH BONSAI</h2>

      <ul>
        <li><Link to="/filosofia">Filosofía</Link></li>
        <li><Link to="/gallery">Galería</Link></li>
        <li><Link to="/contact">Reservas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;