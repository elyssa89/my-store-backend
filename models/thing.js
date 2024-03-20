const mongoose = require('mongoose');


const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});
// utiliser le scham entant que model pour lire , saubegder dans la MongoDB::CMME orm 
// nim de model et le Schema
//utiliser le shcema piur interagir avec la db
module.exports = mongoose.model('Thing', thingSchema);
