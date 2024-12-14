const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

mongoose.connect(MONGODB_URI, {
  dbName: 'finly-db',
  bufferCommands: false,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Could not connect to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  });