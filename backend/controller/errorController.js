const AppError = require("../utils/appError");


const sendErrorDev = (error, response) => {
  const statucCode = error.statusCode || 500;
  const status = error.status || 'error';
  const message = error.message;
  const stack = error.stack;

  return response.status(statusCode).json({
    status,
    message,
    stack,
  })
}

const sendErrorProd = (error, response) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || 'error';
  const message = error.message;
  const stack = error.stack;

  if (error.isOperational) {
    return response.status(statusCode).json({
      status,
      message,
    });
  }

  // Log production errors to logger
  // console.log(error.name, error.message, stack);

  return res.status(500).json({
    status: 'error',
    message: 'Something went very wrong',
  })
}

const globalErrorHandler = (err, req, res, next) => {
  if (err.name === 'SequelizeValidationError') {
    err = new AppError(err.errors[0].message, 400);
  }
  if (err.name === 'SequelizeUniqueConstraintError') {
    err = new AppError(err.errors[0].message, 400);
  }
  if (process.env.NODE_ENV === 'development') {
    return sendErrorDev(err, res);
  }
  return sendErrorProd(err, res);
};


module.exports = globalErrorHandler;