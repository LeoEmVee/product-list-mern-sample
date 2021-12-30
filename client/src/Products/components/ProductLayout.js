import React, { useState } from 'react'; // Importa framework React y hook useState (un hook es una función especial de React para manejar estados del componente).
import Header from './Header'; // Importa Header, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import AddButton from './AddButton'; // Importa AddButton, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import Loading from './Loading'; // Importa Loading, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import { Button } from 'react-bulma-components'; // Importa botón de Bulma.

const ProductLayout = () => { // Función que retorna el componente que luego será renderizado: los componentes hijos importados Header, AddButton y Loading (con el estado que le corresponda). El Button está de ejemplo para cambiar el estado de Loading (isLoading).
  const [isLoading, setIsLoading] = useState(true); // useState retorna dos valores: una variable de estado (en este caso true o false, el argumento que recibe useState) y una función de actualización del estado.
  // Equivale a: const state = useState(true), state[0] = isLoading, state[1] = setIsLoading.
  return (
    <>
      <Header title="Seguimiento de productos"></Header>
      <AddButton></AddButton>
      <Button onClick={() => setIsLoading(!isLoading)}>Update state</Button>
      {
        isLoading ? <Loading></Loading> : 'Mostrar resultado fetch'
      }
    </>
  );
}

export default ProductLayout; // Exporta ProductLayout, que será llamado en index para ser renderizado al browser.