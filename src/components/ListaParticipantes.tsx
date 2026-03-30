export default function ListaParticipantes({ participantes, eliminarParticipante }: any) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {participantes.map((p: any) => {
        let backgroundColor = "";
        if (p.nivel === "Principiante") {
          backgroundColor = "bg-green-300";
        } else if (p.nivel === "Intermedio") {
          backgroundColor = "bg-yellow-300";
        } else {
          backgroundColor = "bg-red-400";
        }
        return (
          <div key={p.id} className={`shadow rounded p-4 hover:shadow-lg transition ${backgroundColor}`}>
            <h3 className="font-bold">{p.nombre}</h3>
            <p>{p.pais}</p>
            <p>Modalidad: {p.modalidad}</p>
            <p>Nivel: {p.nivel}</p>
            <p>Tecnologías: {p.tecnologias.join(" - ")}</p>
            <button onClick={() => eliminarParticipante(p.id)} className="mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
          </div>
        );
      })}
    </div>
  );
}
