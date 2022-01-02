import React, { useState, useEffect } from 'react'; // Importa framework React y hooks useState (función especial de React para manejar estados del componente) y useEffect (para manejar el ciclo de vida del componente React, ejecutando efectos secundarios).
import { Modal, Container } from 'react-bulma-components'; // Importa Modal de react-bulma-components, un modelo de card para poner el formulario encima, y el componente Container.
import Header from './Header'; // Importa Header, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import AddButton from './AddButton'; // Importa AddButton, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import ListProducts from './ListProducts'; // Importa ListProducts, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import Form from './Form'; // Importa Form, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import Loading from './Loading';  // Importa Loading, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).
import { saveProduct, getProducts } from '../services'; // Importa saveProduct desde services/index, para llamarlo cuando se haga submit de datos en el hijo Form. Y getProducts, para llamarla en el useEffect.

const ProductLayout = () => { // Función que retorna el componente que luego será renderizado: los componentes hijos importados Header, AddButton y ListProducts (con el estado que le corresponda), y el componente Modal de Bulma, para crear el formulario de entrada de productos. Añadido método onClick al AddButton, con el que se abre el formulario (setIsModalOpen(true)).
  
  const [isModalOpen, setIsModalOpen] = useState(false); // useState retorna dos valores: una variable de estado (en este caso true o false, el argumento que recibe useState) y una función de actualización del estado.
  const [isLoading, setIsLoading] = useState(true); // useState retorna dos valores: una variable de estado (en este caso true o false, el argumento que recibe useState) y una función de actualización del estado.
  // Equivale a: const state = useState(true), state[0] = isLoading, state[1] = setIsLoading.
  const [products, setProducts] = useState([]); // useState retorna los productos de la base de datos. Una es el estado de los productos (si existen o no), y la otra actualiza el estado (según haya productos introducidos o no).

  async function loadProducts () { // Declara que la respuesta (lo que será el componente) de la función será el resultado de getProducts() cada vez que se actualice el estado del componente.
    const response = await getProducts(); // Ejecuta la función getProducts de sevice/index, para requerir la información existente en la base de datos.
    if (response.status === 200) { // Si hay respuesta positiva, actualiza el estado de los productos al recibido en la respuesta del servidor.
      setProducts(response.data.products);
    }
    setIsLoading(false); // Cambia el estado de isLoading a false, para que se muestre el listado de productos en lugar del Loader.
  };

  useEffect(() => { // Función que se ejecuta después del renderizado. Equivale a componentDidMount(), componentDidUpdate() y componentWillMount() (que necesitan render() antes del return) en componentes tipo clase. Sirve para actualizar estados cuando hay algún cambio en backend, o para actualizaciones en una suscripción (en ese caso el efecto debe ser ejecutado con saneamiento para evitar saturar la memoria).
    loadProducts(); // Ejecuta loadProducts para mostrar el listado de productos existentes después de una actualización del estado.
  }, []); // El [] como segundo argumento de useEffect evita que la función asíncrona se ejecute si no hay cambios en la base de datos (porque el array vacío no cambia).

  const handleSubmit = async (data) => { // Función para manejar el submit de los datos que se haga desde el componente hijo Form. Data es un objeto que tiene todos los datos del formulario y una imagen.
    await saveProduct(data); // Llama a saveProduct (de services) con los datos que vienen de Form, para guardarlos en la DB.
    loadProducts(); // Ejecuta loadProducts para mostrar el listado de productos existentes después de introducirse un producto nuevo (espera que se ejecute la función anterior).
    setIsModalOpen(false); // Cambia el estado del modal para que se cierre la ventana del formulario después de guardarse el nuevo producto.
  }
  
  return ( // Contenido de lo que se retorna para renderizar por index (que es el contenido de todos los componentes hijos de este).
    <Container>
      <Header title="Seguimiento de productos"></Header>
      <AddButton onClick={() => setIsModalOpen(true)}></AddButton>
      {
        isLoading && <Loading></Loading>// Retorna el Loader si el estado es isLoading.
      }
      {
        !isLoading && !products.length && <h2 className="has-text-centered">No hay productos a listar</h2> // Retorna mensaje en caso de que la operación de carga termine con resultado 0.
      }
      {
        !isLoading && products.length && <ListProducts products={products}></ListProducts> // Retorna la lista de productos (ListProducts) si la operación de carga termina con resultado positivo.
      }
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
    </Container>
  );
}

export default ProductLayout; // Exporta ProductLayout, que será llamado en index para ser renderizado al browser.