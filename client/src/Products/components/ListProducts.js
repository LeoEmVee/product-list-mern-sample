import React, { useState } from 'react'; // Importa framework React y hook useState (un hook es una función especial de React para manejar estados del componente).
import Loading from './Loading';  // Importa Loading, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).

const ListProducts = () => { // Función que retorna el componente que luego será renderizado.
  const [isLoading, setIsLoading] = useState(true); // useState retorna dos valores: una variable de estado (en este caso true o false, el argumento que recibe useState) y una función de actualización del estado.
  // Equivale a: const state = useState(true), state[0] = isLoading, state[1] = setIsLoading.
  return ( // Contenido del componente que se retorna.
    isLoading ? <Loading></Loading> : 'Mostrar listado'
  );
}

export default ListProducts;// Exporta ListProducts, que será llamado en ProductLayout, componente padre de este.