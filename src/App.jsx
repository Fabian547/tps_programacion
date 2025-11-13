import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import Filtrado from './componentes/Filtrado';

function App() {
  const [id, setID] = useState(0);
  const [tareas, setTareas] = useState([]);
  const [tareasFiltradas, setTareasFiltradas] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("Todo");

  const guardarTarea = (tarea) => {
    const tareaConEstado = { ...tarea, id, estado: "Pendiente" };
    const nuevas = [...tareas, tareaConEstado];
    setTareas(nuevas);
    setTareasFiltradas(nuevas);
    setID(id + 1);
  };

  const eliminarTarea = (tareaId) => {
    const nuevas = tareas.filter((t) => t.id !== tareaId);
    setTareas(nuevas);
    setTareasFiltradas(nuevas);
  };

  const cambiarEstadoTarea = (idTarea, nuevoEstado) => {
  const actualizadas = tareas.map((tarea) =>
    tarea.id === idTarea ? { ...tarea, estado: nuevoEstado } : tarea
  );
  setTareas(actualizadas);

  const resultadoFiltrado =
    filtroCategoria === "Todo"
      ? actualizadas
      : actualizadas.filter((t) => t.categoria === filtroCategoria);

  setTareasFiltradas(resultadoFiltrado);
};

  const ordenPrioridad = { Alta: 1, Media: 2, Baja: 3 };
  const tareasOrdenadas = [...tareasFiltradas].sort(
    (a, b) => ordenPrioridad[a.prioridad] - ordenPrioridad[b.prioridad]
  );

  return (
    <div>
      <Formulario guardarTarea={guardarTarea} />

      <Filtrado
        tareasOriginales={tareas}
        setTareasFiltradas={setTareasFiltradas}
        setFiltroCategoria={setFiltroCategoria}
      />

      <Listado
        tareas={tareasOrdenadas}
        eliminarTareas={eliminarTarea}
        cambiarEstado={cambiarEstadoTarea}
      />
    </div>
  );
}

export default App;