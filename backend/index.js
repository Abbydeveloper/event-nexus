require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');
const { Pool } = require('pg');
const morgan = require('morgan');
const cors = require('cors');

const authRouter = require('./route/authRoute');
const eventRouter = require('./route/eventRoute');
const userRouter = require('./route/userRoute');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');
const catchAsync = require('./utils/catchAsync');


//Create an instance of the Express application
const app = express();



const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// Middleware to parse JSON bodies
app.use(express.json());
app.use(morgan('dev'));

// app routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/events', eventRouter)
app.use('/api/v1/users', userRouter)

app.use(
  '*',
  catchAsync(async (req, res, next) => {
    throw new AppError(`Can't find the ${req.originalUrl} route on this server`, 404);
  })
);
// Global Error Handler
app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 4000
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
