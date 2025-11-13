import { useState } from 'react';
export default function Filtrado({ tareasOriginales, setTareasFiltradas }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todo");

  const filtrar = (categoria, lista) => {
    if (categoria === "Todo") {
      setTareasFiltradas(lista);
    } else {
      const resultado = lista.filter(t => t.categoria === categoria);
      setTareasFiltradas(resultado);
    }
  };

  return (
    <div className="filtro" style={{ backgroundColor: "lightgray", padding: "1rem" }}>
      <h3>Filtrar por categoría</h3>

      <select
        value={categoriaSeleccionada}
        onChange={(e) => {
          const nuevaCategoria = e.target.value;
          setCategoriaSeleccionada(nuevaCategoria);
          filtrar(nuevaCategoria, tareasOriginales);
        }}
      >
        <option value="Todo">Todo</option>
        <option value="domestico">Doméstico</option>
        <option value="laborales">Laborales</option>
        <option value="administrativas">Administrativas</option>
        <option value="sociales">Sociales</option>
        <option value="personales">Personales</option>
      </select>
    </div>
  );
}