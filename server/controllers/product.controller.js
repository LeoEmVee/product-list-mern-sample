const Product = require('../models/product.model'); // Importa el modelo de producto

async function addProduct (req, res) { // Función para añadir entrada a la base de datos (falta la imagen)
  try { // Intenta:
    const { name, size, unitaryPrice, description } = req.body; // Constante que representa el body de la post request.
    const product = Product({name, size, unitaryPrice, description}); // Constante que representa el esquema definido en models.
    if (req.file) { // Comprueba si la request viene con archivo (lo determina multer). En ese caso:
      const { filename } = req.file;  // Extrae el filename de ese req.file.
      product.setImgUrl(filename); // Lo pasa como argumento al método setImgUrl definido en el esquema de product.model, para darle una URL.
    }
    const productStored = await product.save(); // Constante que representa el método grabar la entrada.
    res.status(201).send({ productStored }); // Envía como respuesta el status 201 y el producto almacenado (con el método de la línea anterior)
  } catch (error) { // En caso de error, envía mensaje (de momento, de error del servidor)
    res.status(500).send({ message: error.message});
  }
}

async function getProducts (req, res) { // Función para recuperar todos los productos de la DB.
  const products = await Product.find().lean().exec(); // Método para buscar los productos en la base de datos. Con Lean devuelve objetos planos de js y con exec ejecuta la consulta. Funciona sin ellos.
  res.status(200).send({ products }); // Devuelve mensaje de respuesta Ok.
}

module.exports = { // Exporta las funciones addProduct y getProducts (las llamará el router cuando se reciban una post o una get request).
  addProduct,
  getProducts
};