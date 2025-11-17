export default function Tarjeta({nombre,categoria,prioridad,estado,eliminar,onCambiarEstado,}) 
{
  console.log("categoria:", categoria);
console.log("prioridad:", prioridad);
  return (
    <div className="Tarjeta" style={{ backgroundColor: "lightblue", margin: "1rem", padding: "1rem" }}>
      <span className="Eliminar" onClick={eliminar}>X</span>
      <span>Nombre: {nombre}</span>
      <span>Categoría: {categoria}</span>
      <span>Prioridad: {prioridad}</span>
      <span>
        Estado:
        <select value={estado} onChange={(e) => onCambiarEstado(e.target.value)}>
          <option value="Pendiente">Pendiente</option>
          <option value="En proceso">En proceso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </span>
    </div>
  );
  
}