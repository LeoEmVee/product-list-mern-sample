import React from 'react'; // Importa framework React y hook useState (un hook es una función especial de React para manejar estados del componente).
import Header from './Header'; // Importa Header, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import AddButton from './AddButton'; // Importa AddButton, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import ListProducts from './ListProducts'; // Importa ListProducts, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).

const ProductLayout = () => { // Función que retorna el componente que luego será renderizado: los componentes hijos importados Header, AddButton y ListProducts (con el estado que le corresponda).
  return (
    <>
      <Header title="Seguimiento de productos"></Header>
      <AddButton></AddButton>
      <ListProducts></ListProducts>
    </>
  );
}

export default ProductLayout; // Exporta ProductLayout, que será llamado en index para ser renderizado al browser.