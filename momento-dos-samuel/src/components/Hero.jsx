import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>El arte de la paciencia</h1>

      <p>
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
        Un espacio para reconectar con la naturaleza.
      </p>

      <button onClick={() => navigate("/reservas")}>
        Reserva un taller
      </button>
    </section>
  );
}