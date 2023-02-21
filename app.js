const express = require('express');
const wineRoutes = require('./src/routes/wine');
const userRoutes = require('./src/routes/user');
const imageRoutes = require('./src/routes/image');

const app = express();
const cors = require('cors')
app.use(cors())

app.use('/images', imageRoutes);

app.use('/api/wine', wineRoutes);
app.use('/api/wine/name', wineRoutes);

app.use('/api/auth', userRoutes);

module.exports = app;