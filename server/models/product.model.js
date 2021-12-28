const mongoose = require('mongoose'); // Importa framework mongoose.

const Schema = mongoose.Schema; // Crea un esquema de mongoose (modelo de dato para la DB)

const ProductSchema = Schema({ // Esquema del dato (en este caso, producto)
  name: String,
  size: Number,
  unitaryPrice: Number,
  imgUrl: String,
  description: String
}, {
  timestamps: true // Crea la propiedad "created_at" automáticamente.
})

module.exports = mongoose.model('Product', ProductSchema);