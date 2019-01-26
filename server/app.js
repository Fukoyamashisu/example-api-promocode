import express from 'express';
import bodyParser from 'body-parser';
import promoCode from '../routes/promoCode.route';
import api from '../routes/api.route';

require('dotenv').config()

const PORT = process.env.PORT || 3000;
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/promo', promoCode);
app.use('/api', api);


app.get('/', (req, res) => {
  res.send('I\'m alive!');
});


app.listen(PORT, () => {
  console.log('Alive :)!');
});
