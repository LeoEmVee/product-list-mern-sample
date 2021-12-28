const mongoose = require('mongoose');

mongoose.connection.on('error', () => {
  console.log('Connection to MongoDB failed');
})

mongoose.connection.once('open', () => {
  console.log('Succesfully connected to MongoDB');
})

async function connectDB ({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  mongoose.connect(uri, { useNewUrlParser: true});
}

module.exports = connectDB;