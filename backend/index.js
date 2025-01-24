require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');
const { Pool } = require('pg');
const morgan = require('morgan');

const authRouter = require('./route/authRoute');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');
const catchAsync = require('./utils/catchAsync');


//Create an instance of the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(morgan('dev'));

// app routes
app.use('/api/v1/auth', authRouter);

app.use(
  '*',
  catchAsync(async (req, res, next) => {
    throw new AppError(`Can't find the ${req.originUrl} route on this server`, 404);
  })
);
// Global Error Handler
app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 4000
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
