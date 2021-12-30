import axios from 'axios'; // Importa librería Axios, que sirve para hacer peticiones a endpoints o a URLs.

const baseUrl = 'http://localhost:8081/v1'; // Referencia al archivo del backend. Aquí es donde está la DB cuyos datos se rescatan.

export async function getProducts () { // Función para recuperar los productos de la DB. Se exporta para ser llamada desde ListProducts, que retornará el componente después de llamada la función.
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