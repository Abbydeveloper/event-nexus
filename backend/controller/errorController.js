

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
  const statucCode = error.statusCode || 500;
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
  if (process.env.NODE_ENV === 'development') {
    return sendErrorDev(err, res);
  }
  return sendErrorProd(err, res);
};


module.exports = globalErrorHandler;