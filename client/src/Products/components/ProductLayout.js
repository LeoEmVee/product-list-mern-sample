import React from 'react'; // Importa framework React.
import Header from './Header'; // Importa Header, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).

const ProductLayout = () => { // Función que retorna el componente que luego será renderizado. De momento, un string de ejemplo, que se verá en el browser).
  return <Header title="Products app"></Header>;
}

export default ProductLayout; // Exporta ProductLayout, que será llamado en index para ser renderizado al browser.