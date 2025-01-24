const user = require('../db/models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}
const signup = async (req, res, next) => {
  const body = req.body;

  if (!['1', '2'].includes(body.userType)) {
    return res.status(400).json({
      status: 'fail',
      message: 'invalid user type',
    });
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

  const result = newUser.toJSON();

  if (!result) {
    return res.status(400).json({
      status: 'fail',
      message: 'Failed to create new user',
    });
  }

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
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      status: 'fail',
      message: 'Please provide email and password',
    });
  }

  const result = await user.findOne({ where: { email }})
  if (result && result.length !== 0) {
    const isPasswordMatched = await bcrypt.compare(password, result.password);
  
    if (!result || !isPasswordMatched) {
      res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password'
      })
    }

    const token = await generateToken({
      id: result.id,
      email: result.email,
      userType: result.userType,
      role: result.userRole
    });

    return res.json({
      status: 'success',
      message: 'User Login Successful',
      token
    })
  };

  return res.json({
    status: 'fail',
    message: 'Incorrect email or password'
  })
}
module.exports = {
  signup,
  login
};