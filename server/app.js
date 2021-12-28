const express = require('express'); // Importa framework express.
const productRoutes = require('./routes/product.route'); // Importa las rutas del archivo product.route

const app = express(); // Crea aplicación express.

app.use('/v1', productRoutes); // Dice a la app express de usar las rutas definidas en product.routes (get, post, etc.).

module.exports = app;