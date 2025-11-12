document.getElementById("formulario").addEventListener(`submit`,agregartarea);
const tareas=[]
const prioridades={"alta":1,"media":2,"baja":3}
function agregartarea(event){
event.preventDefault();

const nombre=document.getElementById("nombre").value;
const prioridad=document.getElementById('prioridad').value;
const categoria=document.getElementById('categoria').value;

const tarea = { nombre, prioridad, categoria };
    tareas.push(tarea);
    tareas.sort((a, b) => prioridades[a.prioridad] - prioridades[b.prioridad]);
    
    renderizarTarjetas();

    this.reset();
}

function renderizarTarjetas(mostrarTareas = tareas) {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    mostrarTareas.forEach((tarea, index) => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta";
      tarjeta.innerHTML = `
        <strong>Tarea:</strong> ${tarea.nombre}<br>
        <strong>Categoría:</strong> ${tarea.categoria}<br>
        <strong>Prioridad:</strong> ${tarea.prioridad}<br>
        <label><strong>Estado:</strong></label>
        <select>
          <option>Pendiente</option>
          <option>En proceso</option>
          <option>Finalizado</option>
        </select><br>
        <button onclick="eliminarTarea(${index})">Borrar</button>
      `;
      contenedor.appendChild(tarjeta);
    });
  }
  function eliminarTarea(indice) {
    tareas = tareas.filter((_, i) => i !== indice);
    renderizarTarjetas();
  }
  function filtrarCategoria() {
    const categoriaSeleccionada = document.getElementById('filtro_categoria').value;
  
    const tareasFiltradas = tareas.filter(tarea => {
      if (categoriaSeleccionada === "Todo") return true;
      
      return tarea.categoria === categoriaSeleccionada;
    });
    renderizarTarjetas(tareasFiltradas);

}