const user = require('../db/models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}
const signup = catchAsync(async (req, res, next) => {
  const body = req.body;

  if (!['1', '2'].includes(body.userType)) {
    throw new AppError('Invalid user type', 404)
    
  }

  const newUser = await user.create({
    userType: body.userType,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    role: body.role,
    password: body.password,
    confirmPassword: body.confirmPassword,
  });

  if (!newUser) {
    return next(new AppError('Failed to create new user', 400));
  }

  const result = newUser.toJSON();

  delete result.password;
  delete result.deleteAt;

  result.token = generateToken({
    id: result.id,
    email: result.email,
    userType: result.userType,
    role: result.userRole
  })
  
  return res.status(201).json({
    status: 'success',
    message: 'New user profile created successfully',
    data: result,
  })
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password'));
  }

  const result = await user.findOne({ where: { email }});

  if (result && result.length !== 0) {
    const isPasswordMatched = await bcrypt.compare(password, result.password);
  
    if (!result || !isPasswordMatched) {
      return next(new AppError('Incorrect email or password'));
    }

    const token = generateToken({
      id: result.id,
      email: result.email,
      userType: result.userType,
      role: result.userRole
    });

    return res.json({
      status: 'success',
      message: 'User Login Successful',
      token
    });
  };

  return res.json({
    status: 'fail',
    message: 'Incorrect email or password'
  });
});


const authentication = catchAsync(async (req, res, next) => {
      //  get the token from headers
      let idToken = "";
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        idToken = req.headers.authorization.split(' ')[1];
      }

      if (!idToken) {
        return next(new AppError('Please Login to get access', 401))
      }
      
      // token verification
      const tokenDetail = jwt.verify(idToken, process.env.JWT_SECRET_KEY);
      // Get the user detail from db and add to req object
      const freshUser = await user.findByPk(token.id);

      if (!freshUser) {
        return next(new AppError('User does not exist', 400));
      }
      req.user = freshUser;
      return next();
})

module.exports = {
  signup,
  login,
  authentication
};