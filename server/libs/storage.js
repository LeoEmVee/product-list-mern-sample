const multer = require('multer'); // Importa multer, un middleware de node para subir archivos a la DB.

const storage = multer.diskStorage({ // Función copiada de la web. Para guardar los archivos subidos.
  destination: function (req, file, cb) { // Especifica dónde se guardará el archivo.
    cb(null, './storage/images'); // En la carpeta images de storage.
  },
  filename: function (req, file, cb) { // Especifica el nombre que se le dará al archivo (que se crea abajo con la fecha actual y un número random).
    const uniqueSuffix = Date.now() + '-' + Math.round
    (Math.random() * 1E9)
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  }
})

const upload = multer({ storage: storage }); // Podría ser { storage } solo. Llama al método multer pasándole el objeto storage como argumento.

module.exports = upload; // Expoorta upload. La importará el router para decir lo que hay que hacer con el archivo entrante.