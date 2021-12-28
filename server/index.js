require('dotenv').config(); // Importa módulo para cargar dependencias de entorno desde un archivo .env.
// Esta línea equivale a:
// const dotenv = require('dotenv');
// dotenv.config(); 
const express = require('express'); // Importa framework express.
const connectDB = require('./models/index'); // Importa la función connectDB, que conectará con la DB.
const { appConfig, dbConfig } = require('./config'); // Importa la configuración de esta app (el puerto) y de la uri de la DB.
const productRoutes = require('./routes/product.route'); // Importa las rutas del archivo product.route

const app = express(); // Crea aplicación express.

app.use('/v1', productRoutes); // Dice a la app express de usar las rutas definidas en product.routes (get, post, etc.).

(async function () {
  try { //Intenta:
    await connectDB(dbConfig); // Esperar conexión a DB (llama la función definida en models/index, que recibe como parámetros el host, port y dbName configurados en dbConfig)
    app.listen(appConfig.port, () => { // Abrir el puerto especificado en appConfig.
      console.log(`Server listening on port ${appConfig.port}`);
    });
  } catch (error) { // Devuelve error en caso contrario
    console.error(error);
    process.exit(0);
  }
})(appConfig, dbConfig);
// Hacer esta función que se auto-llama es lo mismo que declarar la función y llamarla justo debajo -en ese caso hay que ponerle nombre-.