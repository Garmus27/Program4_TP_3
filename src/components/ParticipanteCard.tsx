import { Participante } from "../models/Participante";

interface Props {
  participante: Participante;
  eliminarParticipante: (id: number) => void;
}

export default function ParticipanteCard({ participante: p, eliminarParticipante }: Props) {
  let backgroundColor = "";
  if (p.nivel === "Principiante") {
    backgroundColor = "bg-green-300";
  } else if (p.nivel === "Intermedio") {
    backgroundColor = "bg-yellow-300";
  } else {
    backgroundColor = "bg-red-400";
  }

  return (
    <div className={`shadow rounded p-4 hover:shadow-lg transition ${backgroundColor}`}>
      <h3 className="font-bold">{p.nombre}</h3>
      <p>{p.pais}</p>
      <p>Modalidad: {p.modalidad}</p>
      <p>Nivel: {p.nivel}</p>
      <p>Tecnologías: {p.tecnologias.join(" - ")}</p>
      <button
        onClick={() => eliminarParticipante(p.id)}
        className="mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Eliminar
      </button>
    </div>
  );
}
