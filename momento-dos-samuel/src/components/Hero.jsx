import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div>
        <h1>El arte de la paciencia</h1>

        <p>
          Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
        </p>

        <button onClick={() => navigate("/contact")}>
          Reserva un taller
        </button>
      </div>
    </section>
  );
}

export default Hero;