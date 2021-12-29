import React from 'react'; // Importa framework React.
import { Container, Section } from 'react-bulma-components'; // Importa componentes Container y Section de react-bulma-components.

const Header = ({ title }) => { // Función que retorna el componente que luego será renderizado.
  return ( // Contenido del componente que se retorna.
    <Section>
      <Container>
        <h1 className="title has-text-centered">{title} de la huevada</h1>
      </Container>
    </Section>
  )
}

export default Header; // Exporta Header, que será llamado en ProductLayout, componente padre de este.