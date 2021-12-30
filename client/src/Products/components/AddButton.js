import React from 'react'; // Importa framework React.
import { Container, Section, Button } from 'react-bulma-components'; // Importa componentes Container, Section y Button de react-bulma-components.

const AddButton = ({ onClick }) => { // Función que retorna el componente que luego será renderizado. Recibe como argumento onCLick (que se ejecutará cuando se pulse el botón).
  return ( // Contenido del componente que se retorna.
    <Section>
      <Container>
        <div className="is-pulled-right">
          <Button onClick={onClick} color="primary">Añadir producto</Button>
        </div>
      </Container>
    </Section>
  )
}

export default AddButton; // Exporta AddButton, que será llamado en ProductLayout, componente padre de este.