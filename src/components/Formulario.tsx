import { useState } from "react";
import { Participante } from "../models/Participante";

export default function Formulario({ onAdd }: any) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    edad: "",
    pais: "Argentina",
    modalidad: "Presencial",
    tecnologias: [] as string[],
    nivel: "Principiante",
    aceptaTerminos: false,
  });

  const fullfilledForm =
  form.aceptaTerminos &&
  form.nombre &&
  form.email &&
  form.edad &&
  form.modalidad &&
  form.nivel &&
  form.tecnologias.length > 0;

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "tecnologias") {
      setForm((prev) => ({
        ...prev,
        tecnologias: checked
          ? [...prev.tecnologias, value]
          : prev.tecnologias.filter((t) => t !== value),
      }));
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const nuevo = new Participante(
      Date.now(),
      form.nombre,
      form.email,
      form.edad,
      form.pais,
      form.modalidad,
      form.tecnologias,
      form.nivel,
      form.aceptaTerminos
    );
    onAdd(nuevo);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
    >
      <input name="nombre" placeholder="Nombre" onChange={handleChange} className="border p-2" required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2" required />

      <input name="edad" type="number" placeholder="Edad" onChange={handleChange} className="border p-2" required />
      
      <select name="pais" onChange={handleChange} className="border p-2">
        <option>Argentina</option>
        <option>Chile</option>
        <option>Uruguay</option>
        <option>México</option>
        <option>España</option>
      </select>

      <div className="flex gap-4">
        {["Presencial", "Virtual", "Híbrido"].map((m) => (
          <label key={m}>
            <input type="radio" name="modalidad" value={m} onChange={handleChange} /> {m}
          </label>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3">
        {["React", "Angular", "Vue", "Node", "Python", "Java"].map((t) => (
          <label key={t}>
            <input type="checkbox" name="tecnologias" value={t} onChange={handleChange} /> {t}
          </label>
        ))}
      </div>

      <select name="nivel" onChange={handleChange} className="border p-2">
        <option>Principiante</option>
        <option>Intermedio</option>
        <option>Avanzado</option>
      </select>

      <label>
        <input type="checkbox" name="aceptaTerminos" onChange={handleChange} /> Acepto términos
      </label>

{
        fullfilledForm
        ?
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2">
        Registrar
      </button>
      :
        <button disabled className="bg-gray-400 text-white px-4 py-2 rounded col-span-1 md:col-span-2 cursor-not-allowed">
          Registrar
        </button>

      }

    </form>
  );
}