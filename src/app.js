require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const dogsRouter = require('./dogs/dogs-router');
const catsRouter = require('./cats/cats-router');
const animalsRouter = require('./animals/animals-router');
const usersRouter = require('./users/users-router');
const { NODE_ENV ,CLIENT_ORIGIN } = require('./config');
const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/dogs',dogsRouter);
app.use('/api/cats',catsRouter);
app.use('/api/users',usersRouter);
app.use('/api/animals',animalsRouter);

app.use(errorHandler);

function errorHandler(error, req, res, next) {
  const code = error.status || 500;
  if (NODE_ENV === 'production') {
    error.message = code === 500 ? 'internal server error' : error.message;
  } else {
    console.error(error);
  }
  res.status(code).json({message: error.message});
}
module.exports = app;


