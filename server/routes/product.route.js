const express = require('express'); // Importa framework express.
const upload = require('../libs/storage'); // Importa upload de storage (donde está el método multer para guardado de archivos).
const { addProduct, getProducts } = require('../controllers/product.controller'); // Importa la función appProduct definida en el controller.
const router = express.Router(); // Crea router de express.

router.post('/products', upload.single('image'), addProduct); // Método post del router. Postea a la ruta especificada (/products) según la lógica de la función addProduct, definida en el controller.
// Añadido middleware de multer para guardado de imágenes subidas.
router.get('/products', getProducts); // Método get del router. Recupera los productos de la ruta especificada (/products) según la lógica de la función getProducts, definida en el controller.

module.exports = router; // Exporta el router (lo importa app, por tanto index)