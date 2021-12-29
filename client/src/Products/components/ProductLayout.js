import React from 'react'; // Importa framework React.
import Header from './Header'; // Importa Header, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import AddButton from './AddButton'; // Importa AddButton, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import Loading from './Loading'; // Importa Loading, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).

const ProductLayout = () => { // Función que retorna el componente que luego será renderizado: los componentes hijos importados Header, AddButton y Loading.
  return (
    <>
      <Header title="Seguimiento de productos"></Header>
      <AddButton></AddButton>
      <Loading></Loading>
    </>
  );
}

export default ProductLayout; // Exporta ProductLayout, que será llamado en index para ser renderizado al browser.