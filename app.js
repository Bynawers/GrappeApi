const express = require('express');
const wineRoutes = require('./src/routes/wine');

const app = express();

app.use('/api/wine', wineRoutes);


module.exports = app;