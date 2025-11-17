import { useState } from 'react';

export default function useTarea() {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('domestico');
  const [prioridad, setPrioridad] = useState('Alta');

  const setDato = (campo, valor) => {
    switch (campo) {
      case 'nombre':
        setNombre(valor);
        break;
      case 'categoria':
        setCategoria(valor);
        break;
      case 'prioridad':
        setPrioridad(valor);
        break;
      default:
        break;
    }
  };

  const limpiarForm = () => {
    setNombre('');
    setCategoria('domestico');
    setPrioridad('Alta');
  };

  return [{ nombre, categoria, prioridad }, setDato, limpiarForm];
}