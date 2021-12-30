import React from 'react'; // Importa framework React.
import { Loader } from 'react-bulma-components'; // Importa componente Loader react-bulma-components.

const Loading = () => { // Función que retorna el componente que luego será renderizado.
  return ( // Contenido del componente que se retorna.
    <div className="columns is-centered">
      <Loader style={{width: 200, heigth: 200}}>TEXTOEJEMPLOLOADINGPARAQUESEVEA</Loader>
    </div>
    
  )
}

export default Loading; // Exporta Loading, que será llamado en ListProducts, componente padre de este.