import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Filtros from "./components/Filtros";
import ListaParticipantes from "./components/ListaParticipantes";
import { Participante } from "./models/Participante";

function App() {
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [filtros, setFiltros] = useState({
    nombre: "",
    modalidad: "",
    nivel: "",
  });

  // Al cargar la página → recuperar participantes del localStorage
  useEffect(() => {
    const guardados = localStorage.getItem("participantes");
    if (guardados) {
      setParticipantes(JSON.parse(guardados));
    }
  }, []);

  // Cuando cambia la lista → guardar en localStorage automáticamente
  useEffect(() => {
    localStorage.setItem("participantes", JSON.stringify(participantes));
  }, [participantes]);

  const agregarParticipante = (nuevo: Participante) => {
    setParticipantes([...participantes, nuevo]);
  };

  const eliminarParticipante = (id: number) => {
    setParticipantes(participantes.filter(p => p.id !== id));
  };

  const limpiarFiltros = () => {
    setFiltros({ nombre: "", modalidad: "", nivel: "" });
  };

  const resetearDatos = () => {
    localStorage.removeItem("participantes");
    setParticipantes([]);
  };

  const participantesFiltrados = participantes.filter((p) => {
    return (
      p.nombre.toLowerCase().includes(filtros.nombre.toLowerCase()) &&
      (filtros.modalidad === "" || p.modalidad === filtros.modalidad) &&
      (filtros.nivel === "" || p.nivel === filtros.nivel)
    );
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Registro de Participantes
      </h1>

      <p className="font-bold text-center mb-6">
        Mostrando {participantesFiltrados.length} de {participantes.length} participantes
      </p>

      <Formulario onAdd={agregarParticipante} />

      <Filtros filtros={filtros} setFiltros={setFiltros} onLimpiar={limpiarFiltros} onResetear={resetearDatos} />

      <ListaParticipantes participantes={participantesFiltrados} eliminarParticipante={eliminarParticipante} />
    </div>
  );
}

export default App;
