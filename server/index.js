require('dotenv').config(); // Esta línea equivale a:
// const dotenv = require('dotenv');
// dotenv.config(); 
const express = require('express');
const { appConfig } = require('./config'); 

const app = express();

app.listen(appConfig.PORT, () => {
  console.log(`Server listening on port ${appConfig.PORT}`);
})
