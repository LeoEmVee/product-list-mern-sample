import React from 'react'; // Importa framework React.
import { Container, Section, Button } from 'react-bulma-components'; // Importa componentes Container, Section y Button de react-bulma-components.

const AddButton = () => { // Función que retorna el componente que luego será renderizado.
  return ( // Contenido del componente que se retorna.
    <Section>
      <Container>
        <div className="is-pulled-right">
          <Button color="primary">Er botón de añadir</Button>
        </div>
      </Container>
    </Section>
  )
}

export default AddButton; // Exporta AddButton, que será llamado en ProductLayout, componente padre de este.