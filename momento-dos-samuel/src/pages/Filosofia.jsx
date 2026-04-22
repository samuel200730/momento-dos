import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Filosofia() {
  return (
    <>
      <Navbar />
      <section className="filosofia">
        <h1>Menos es más</h1>

        <p>
          Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales.
        </p>

        <p>
          Buscamos el equilibrio entre la intervención humana y la naturaleza.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Filosofia;