const express = require('express'); // Importa framework express.
const { addProduct } = require('../controllers/product.controller'); // Importa la función appProduct definida en el controller.
const router = express.Router(); // Crea router de express.

router.post('/products', addProduct);
 // Método post del router. Postea a la ruta especificada (/products) según la lógica de la función addProduct, definida en el controller.

module.exports = router; // Exporta el router (lo importa app, por tanto index)