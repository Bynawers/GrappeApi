const express = require('express');
const wineRoutes = require('./src/routes/wine');
const userRoutes = require('./src/routes/user');

const app = express();

app.use('/api/wine', wineRoutes);
app.use('/api/wine/name', wineRoutes);

app.use('/api/auth', userRoutes);


module.exports = app;