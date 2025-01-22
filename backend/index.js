require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');
const { Pool } = require('pg');
const morgan = require('morgan');

const authRouter = require('./route/authRoute');

//Create an instance of the Express application
const app = express();

// PostgreSQL connection config
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'nexus',
  password: 'bogadeji',
  port: 5433
});


// Middleware to parse JSON bodies
app.use(express.json());
app.use(morgan('dev'));


// app routes
app.use('/api/v1/auth', authRouter);

app.use('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'Route not found'
  });
});

const PORT = process.env.APP_PORT || 4000
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
