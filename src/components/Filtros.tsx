export default function Filtros({ filtros, setFiltros }: any) {
  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4">
      <input
        placeholder="Buscar por nombre"
        className="border p-2"
        onChange={(e) => setFiltros({ ...filtros, nombre: e.target.value })}
      />

      <select
        className="border p-2"
        onChange={(e) => setFiltros({ ...filtros, modalidad: e.target.value })}
      >
        <option value="">Todas</option>
        <option>Presencial</option>
        <option>Virtual</option>
        <option>Híbrido</option>
      </select>

      <select
        className="border p-2"
        onChange={(e) => setFiltros({ ...filtros, nivel: e.target.value })}
      >
        <option value="">Todos</option>
        <option>Principiante</option>
        <option>Intermedio</option>
        <option>Avanzado</option>
      </select>
    </div>
  );
}