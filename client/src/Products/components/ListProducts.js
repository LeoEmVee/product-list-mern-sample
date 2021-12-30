import React, { useState, useEffect } from 'react'; // Importa framework React y hooks useState (un hook es una función especial de React para manejar estados del componente) y useEffect (para manejar el ciclo de vida del componente React, ejecutando efectos secundarios).
import axios from 'axios'; // Importa librería Axios, que sirve para hacer peticiones a endpoints o a URLs.
import Loading from './Loading';  // Importa Loading, componente hijo, para retornarlo en la función de este componente (lo que luego será renderizado).

const baseUrl = 'http://localhost:8081/v1'; // Referencia al archivo del backend. Aquí es donde está la DB cuyos datos se rescatan.

async function getProducts () { // Función para recuperar los productos de la DB.
  try { // Intenta:
    const response = await axios({ // Recibe como parámetro un objeto con las propiedades:
      url: `${baseUrl}/products`, // Su valor es la baseUrl y el endpoint donde están los productos.
      method: 'GET' // El método de la request. GET es el default, pero lo especificamos para que se vea.
    })
    return response;
  } catch (error) { // Devuelve error en caso de no lograr recuperar los datos.
    console.log(error);
  }

}

const ListProducts = () => { // Función que retorna el componente que luego será renderizado.
  const [isLoading, setIsLoading] = useState(true); // useState retorna dos valores: una variable de estado (en este caso true o false, el argumento que recibe useState) y una función de actualización del estado.
  // Equivale a: const state = useState(true), state[0] = isLoading, state[1] = setIsLoading.
  const [products, setProducts] = useState([]); // useState retorna los productos de la base de datos. Una es el estado de los productos (si existen o no), y la otra actualiza el estado (según haya productos introducidos o no).

  useEffect(() => { // Función que se ejecuta después del renderizado. Equivale a componentDidMount(), componentDidUpdate() y componentWillMount() (que necesitan render() antes del return) en componentes tipo clase. Sirve para actualizar estados cuando hay algún cambio en backend, o para actualizaciones en una suscripción (en ese caso el efecto debe ser ejecutado con saneamiento para evitar saturar la memoria).
    (async function () { // Declara que la respuesta (lo que será el componente) de la función será el resultado de getProducts() cada vez que se actualice el estado del componente.
      const response = await getProducts();

      if (response.status === 200) {
        setProducts(response.data.products);
        console.log(response);
      }
    })();
  }, []); // El [] como segundo argumento de useEffect evita que la función asíncrona se ejecute si no hay cambios en la base de datos (porque el array vacío no cambia).

  
  return ( // Contenido del componente que se retorna.
    isLoading ? <Loading></Loading> : 'Mostrar listado de productos'
  );
}

export default ListProducts;// Exporta ListProducts, que será llamado en ProductLayout, componente padre de este.