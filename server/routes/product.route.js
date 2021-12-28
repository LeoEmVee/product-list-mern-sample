const express = require('express'); // Importa framework express.

const router = express.Router(); // Crea router de express.

router.post('/products', (req, res) => {
  res.status(201).send({ mierda: "cagaste" });
})
 // Método post (por el momento únicamente con mensaje de confirmación, pero sin acción real con los datos).

module.exports = router;