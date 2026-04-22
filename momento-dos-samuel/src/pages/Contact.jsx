import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    localStorage.setItem("form", JSON.stringify(form));
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Nombre" onChange={handleChange} />
        <input name="email" placeholder="Correo" onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>

      <Footer />
    </>
  );
}

export default Contact;