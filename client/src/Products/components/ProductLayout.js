import React, { useState } from 'react'; // Importa framework React y hook useState (un hook es una función especial de React para manejar estados del componente).
import { Modal } from 'react-bulma-components'; // Importa Modal de react-bulma-components. Un modelo de card para poner el formulario encima.
import Header from './Header'; // Importa Header, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import AddButton from './AddButton'; // Importa AddButton, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import ListProducts from './ListProducts'; // Importa ListProducts, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import Form from './Form'; // Importa Form, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import { saveProduct } from '../services'; // Importa saveProduct desde services/index, para llamarlo cuando se haga submit de datos en el hijo Form.

const ProductLayout = () => { // Función que retorna el componente que luego será renderizado: los componentes hijos importados Header, AddButton y ListProducts (con el estado que le corresponda), y el componente Modal de Bulma, para crear el formulario de entrada de productos. Añadido método onClick al AddButton, con el que se abre el formulario (setIsModalOpen(true)).
  const [isModalOpen, setIsModalOpen] = useState(false); // useState retorna dos valores: una variable de estado (en este caso true o false, el argumento que recibe useState) y una función de actualización del estado.

  const handleSubmit = (data) => { // Función para manejar el submit de los datos que se haga desde el componente hijo Form. Data es un objeto que tiene todos los datos del formulario y una imagen.
    saveProduct(data); // Llama a saveProduct (de services) con los datos que vienen de Form, para guardarlos en la DB.
  }
  
  return (
    <>
      <Header title="Seguimiento de productos"></Header>
      <AddButton onClick={() => setIsModalOpen(true)}></AddButton>
      <ListProducts></ListProducts>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Modal.Card>
        <Modal.Card.Header>
          <Modal.Card.Title>
            Introduzca los datos del producto
          </Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <Form handleSubmit={handleSubmit}></Form>
        </Modal.Card.Body>
      </Modal.Card>
      </Modal>
    </>
  );
}

export default ProductLayout; // Exporta ProductLayout, que será llamado en index para ser renderizado al browser.