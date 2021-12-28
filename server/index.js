require('dotenv').config(); // Esta línea equivale a:
// const dotenv = require('dotenv');
// dotenv.config(); 
const express = require('express');
const connectDB = require('./models/index');
const { appConfig, db } = require('./config');

const app = express();

connectDB(db);
app.listen(appConfig.port, () => {
  console.log(`Server listening on port ${appConfig.port}`);
});