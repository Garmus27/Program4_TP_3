import { useState } from "react";
import Formulario from "./components/Formulario";
import Filtros from "./components/Filtros";
import ListaParticipantes from "./components/ListaParticipantes";

function App() {
  const [participantes, setParticipantes] = useState<any[]>([]);
  const [filtros, setFiltros] = useState({
    nombre: "",
    modalidad: "",
    nivel: "",
  });

  const agregarParticipante = (nuevo: any) => {
    setParticipantes([...participantes, nuevo]);
  };

  const participantesFiltrados = participantes.filter((p) => {
    return (
      p.nombre.toLowerCase().includes(filtros.nombre.toLowerCase()) &&
      (filtros.modalidad === "" || p.modalidad === filtros.modalidad) &&
      (filtros.nivel === "" || p.nivel === filtros.nivel)
    );
  });

  // Eliminar participante 
  const eliminarParticipante = (id: number) => {
    setParticipantes(participantes.filter(p => p.id !== id));
  }

  return (
    
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Registro de Participantes
      </h1>
      
      <p className="font-bold text-center mb-6">Contador de participantes: {participantes.length}</p>

      <Formulario onAdd={agregarParticipante} />

      <Filtros filtros={filtros} setFiltros={setFiltros} />

      <ListaParticipantes participantes={participantesFiltrados} eliminarParticipante={eliminarParticipante} />
    </div>
  );
}

export default App;