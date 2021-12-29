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

module.exports = {
  addProduct
}; // Exporta la función addProduct (la llamará el router cuando se reciba una post request).