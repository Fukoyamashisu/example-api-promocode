const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromoCodeSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  advantage: {
    type: Number,
    required: true,
    max: 100,
  },
  restrictions: {
    'age': [
      {
        eq: Number,
        min: Number,
        max: Number,
      },
    ],
    'date': {
      before: Date,
      after: Date,
    },
    'weather': {
      is: String,
      temp: {
        celsius: Number,
      },
    },
  },
});

// Export the model
module.exports = mongoose.model('PromoCode', PromoCodeSchema);
