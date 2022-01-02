import React from 'react'; // Importa framework React.

const ListProducts = ({ products }) => { // Función que retorna el componente que luego será renderizado; la lista de productos cuando esta existe (la lógica de si listarla o no está en ProductLayout). Recibe como props de su padre (ProductLayout) los productos a listar.
  return ( // Itera y retorna el listado de productos existentes.
    'Mostrar listado de productos'
  );
}

export default ListProducts;// Exporta ListProducts, que será llamado en ProductLayout, componente padre de este.