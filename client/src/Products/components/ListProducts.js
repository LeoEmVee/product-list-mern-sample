import React from 'react'; // Importa framework React.
import { Card, Columns, Content, Heading } from 'react-bulma-components'; // Importa los componentes Card, Columns, Content y Heading de Bulma.

const ListProducts = ({ products }) => {
  // Función que retorna el componente que luego será renderizado; la lista de productos cuando esta existe (la lógica de si listarla o no está en ProductLayout). Recibe como props de su padre (ProductLayout) los productos a listar (products).
  return (
    // Itera y retorna el listado de productos existentes. Los nombres de las propiedades han de coincidir con los de la DB (el product.model del server).
    <Columns>
      {products.map(
        ({ name, size, unitaryPrice, description, _id, imgUrl }) => (
          <Columns.Column size={4} key={_id}>
            <Card>
              <Card.Image size="16by9" src={imgUrl}></Card.Image>
              <Card.Content>
                <Content>
                  <Heading>{name}</Heading>
                  <Heading subtitle size={6}>
                    Precio:{' '}
                    {Intl.NumberFormat('de-DE', {
                      style: 'currency',
                      currency: 'EUR'
                    }).format(unitaryPrice)}{' '}
                    €
                  </Heading>
                  <Heading subtitle size={6}>
                    Stock: {Intl.NumberFormat('de-DE').format(size)} unidades
                    disponibles
                  </Heading>
                  <p>
                    <strong>Descripción: </strong>
                    {description}
                  </p>
                </Content>
              </Card.Content>
            </Card>
          </Columns.Column>
        )
      )}
    </Columns>
  );
};

export default ListProducts; // Exporta ListProducts, que será llamado en ProductLayout, componente padre de este.
