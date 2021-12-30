import React from 'react'; // Importa framework React.
import PropTypes from 'prop-types'; // Importa framework prop-types, que ayuda a validar que los props que se reciben de los componentes sean de un tipo de valor concreto.
import { Container, Section } from 'react-bulma-components'; // Importa componentes Container y Section de react-bulma-components.

const Header = ({ title }) => { // Función que retorna el componente que luego será renderizado.
  return ( // Contenido del componente que se retorna.
    <Section>
      <Container>
        <h1 className="title has-text-centered">{title}</h1>
      </Container>
    </Section>
  )
}

Header.propTypes = { // Chequea que el título del header esté y sea un string.
  title: PropTypes.string.isRequired
}

export default Header; // Exporta Header, que será llamado en ProductLayout, componente padre de este.