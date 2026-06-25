const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middleware/error');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.use(errorHandler);

module.exports = app;
