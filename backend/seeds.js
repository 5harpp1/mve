const mongoose = require('mongoose');
const Product = require('./models/Product');
const { mongoURI } = require('./config');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products added');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));