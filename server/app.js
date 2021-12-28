const express = require('express'); // Importa framework express.
const app = express(); // Crea aplicación express.
const productRoutes = require('./routes/product.route'); // Importa las rutas del archivo product.route

app.use(express.json()); // Dice a la app de usar el método json() para parsear datos que vengan posteados en ese formato.
app.use(express.urlencoded({extended: false})); // Dice a la app de usar el método urlencoded() para parsear datos que vengan posteados en ese formato.
app.use('/v1', productRoutes); // Dice a la app express de usar las rutas definidas en product.routes (get, post, etc.).

module.exports = app; // Exporta app (lo importa index para iniciar el servidor (listen)).