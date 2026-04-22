import { useState } from "react";

const Form = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    email: ""
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos);
    localStorage.setItem("formulario", JSON.stringify(datos));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <button>Enviar</button>
    </form>
  );
};

export default Form;