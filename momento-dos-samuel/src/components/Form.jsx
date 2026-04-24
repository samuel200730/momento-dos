import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    nivel: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    localStorage.setItem("formulario", JSON.stringify(formData));

    // limpiar campos
    setFormData({
      nombre: "",
      email: "",
      nivel: "",
      mensaje: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      
      {/* Nombre */}
      <div>
        <label>Nombre completo</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ej. Ana Silva"
          value={formData.nombre}
          onChange={handleChange}
          required
          onInvalid={(e) => e.target.setCustomValidity("Completa este campo")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>

      {/* Email */}
      <div>
        <label>Correo electrónico</label>
        <input
          type="email"
          name="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          onInvalid={(e) => e.target.setCustomValidity("Completa este campo")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>

      {/* Nivel */}
      <div>
        <label>Nivel de experiencia</label>
        <select
          name="nivel"
          value={formData.nivel}
          onChange={handleChange}
          required
          onInvalid={(e) => e.target.setCustomValidity("Completa este campo")}
          onInput={(e) => e.target.setCustomValidity("")}
        >
          <option value="">Selecciona tu nivel</option>
          <option value="principiante">
            Principiante (Nunca he tenido un Bonsái)
          </option>
          <option value="intermedio">
            Intermedio (Tengo algunos árboles)
          </option>
          <option value="avanzado">
            Avanzado (Busco perfeccionar técnicas)
          </option>
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label>Mensaje (Opcional)</label>
        <textarea
          name="mensaje"
          placeholder="¿Qué te gustaría aprender?"
          value={formData.mensaje}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Enviar Solicitud</button>
    </form>
  );
}

export default Form;