import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const items = [
  "Arce Japonés",
  "Pino Negro",
  "Ficus Retusa",
  "Olmo Chino",
  "Enebro",
  "Azalea",
];

export default function Gallery() {
  return (
    <>
      <Navbar />

      <section className="section">
        <h1>Nuestra Colección</h1>
        <p>Un vistazo a nuestros bonsáis.</p>

        <div className="grid">
          {items.map((item, i) => (
            <Card key={i} title={item} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}