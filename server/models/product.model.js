const mongoose = require('mongoose'); // Importa framework mongoose.
const { appConfig } = require('../config');  // Importa la configuración de esta app (el host y el puerto).

const Schema = mongoose.Schema; // Crea un esquema de mongoose (modelo de dato para la DB).
const ProductSchema = Schema({ // Esquema del dato (en este caso, producto).
  name: String,
  size: Number,
  unitaryPrice: Number,
  imgUrl: String,
  description: String
}, {
  timestamps: true // Crea la propiedad "created_at" automáticamente.
})

ProductSchema.methods.setImgUrl = function setImgUrl (filename) {// Método para definir la URL de la imagen del producto.
  const { host, port } = appConfig; // El host y el port son los que vienen de appConfig en el config file.
  this.imgUrl = `${host}:${port}/public/${filename}`; // La URL de la imagen la forman host, port y el nombre de archivo que llegue como parámetro. El usuario verá public, pero mapearemos public por storage/images en la app.
}

module.exports = mongoose.model('Product', ProductSchema); // Exporta el esquema del componente (product). Lo importará el controller para operar con los datos conforme al mismo.