const config = {
  appConfig: {
    port: process.env.APP_PORT // Configura el puerto de la app indicado en el archivo .env
  },
  dbConfig: {
    port: process.env.DB_PORT, // Configura el puerto de la DB indicado en el archivo .env
    host: process.env.DB_HOST, // Configura el host de la DB indicado en el archivo .env
    dbName: process.env.DB_NAME // Configura el nombre de la DB indicado en el archivo .env
  }
}

module.exports = config;