import Tarjeta from './Tarjeta';

export default function Listado({ tareas, eliminarTareas, cambiarEstado }) {
  return (
    <div className="Panel" style={{ backgroundColor: "lightyellow" }}>
      <h3>Tareas</h3>
      <div className="Listado">
        {tareas.map((tarea) => (
          <Tarjeta
            key={tarea.id}
            nombre={tarea.nombre}
            categoria={tarea.categoria}
            prioridad={tarea.prioridad}
            estado={tarea.estado}
            eliminar={() => eliminarTareas(tarea.id)}
            onCambiarEstado={(nuevoEstado) => cambiarEstado(tarea.id, nuevoEstado)}
          />
        ))}
      </div>
    </div>
  );
}