import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="section">
        <h1>Reserva un Taller</h1>
        <p>Déjanos tus datos y te contactamos.</p>

        <Form />
      </section>

      <Footer />
    </>
  );
}