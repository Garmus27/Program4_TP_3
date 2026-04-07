interface Props {
  filtros: { nombre: string; modalidad: string; nivel: string };
  setFiltros: (filtros: { nombre: string; modalidad: string; nivel: string }) => void;
  onLimpiar: () => void;
  onResetear: () => void;
}

export default function Filtros({ filtros, setFiltros, onLimpiar, onResetear }: Props) {
  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4 flex-wrap">
      <input
        placeholder="Buscar por nombre"
        className="border p-2"
        value={filtros.nombre}
        onChange={(e) => setFiltros({ ...filtros, nombre: e.target.value })}
      />

      <select
        className="border p-2"
        value={filtros.modalidad}
        onChange={(e) => setFiltros({ ...filtros, modalidad: e.target.value })}
      >
        <option value="">Todas</option>
        <option>Presencial</option>
        <option>Virtual</option>
        <option>Híbrido</option>
      </select>

      <select
        className="border p-2"
        value={filtros.nivel}
        onChange={(e) => setFiltros({ ...filtros, nivel: e.target.value })}
      >
        <option value="">Todos</option>
        <option>Principiante</option>
        <option>Intermedio</option>
        <option>Avanzado</option>
      </select>

      <button
        onClick={onLimpiar}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Limpiar filtros
      </button>

      <button
        onClick={onResetear}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Resetear datos
      </button>
    </div>
  );
}
