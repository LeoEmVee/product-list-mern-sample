const mongoose = require('mongoose'); // Importa framework mongoose

mongoose.connection // Error handling (teóricamente para después de la conexión, pero veo que funciona antes)
  .on('error', () => console.log('Connection to MongoDB failed'))// Devuelve mensaje de error si falla la conexión con la DB.
  .once('open', () => console.log('Succesfully connected to MongoDB')); // Devuelve mensaje de conexión correcta.

async function connectDB ({ host, port, dbName }) { // Función para la conexión a la base de datos (se llamará en el index del server).
  const uri = `mongodb://${host}:${port}/${dbName}`; // Declara la URI de la DB con el host, port y dbName recibidos como parámetros.
  await mongoose.connect(uri, { useNewUrlParser: true}); // Queda a la espera de la conexión (usar el URLparser nuevo evita problemas)
}

module.exports = connectDB;