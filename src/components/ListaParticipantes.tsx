import { Participante } from "../models/Participante";
import ParticipanteCard from "./ParticipanteCard";

interface Props {
  participantes: Participante[];
  eliminarParticipante: (id: number) => void;
}

export default function ListaParticipantes({ participantes, eliminarParticipante }: Props) {
  if (participantes.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No hay participantes</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {participantes.map((p) => (
        <ParticipanteCard
          key={p.id}
          participante={p}
          eliminarParticipante={eliminarParticipante}
        />
      ))}
    </div>
  );
}
