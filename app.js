const express = require('express');
const mongoose = require('mongoose');
const sutuffRoutes = require('./routes/stuff.js');
const userRoutes  = require('./routes/user.js');


mongoose.connect('mongodb+srv://elyssa:hello@cluster0.q9vdtm6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json())

app.use('/api/stuff' ,sutuffRoutes );
app.use('/api/auth' , userRoutes)

module.exports = app;