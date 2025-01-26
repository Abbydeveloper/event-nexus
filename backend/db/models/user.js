'use strict';
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../../config/database');
const AppError = require('../../utils/appError');
const user = sequelize.define(
  'users',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userType: {
      type: DataTypes.ENUM('0', '1', '2'),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'userType cannot be null',
        },
        notEmpty: {
          msg: 'userType cannot be empty'
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'firstName cannot be null',
        },
        notEmpty: {
          msg: 'firstName cannot be empty'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'lastName cannot be null',
        },
        notEmpty: {
          msg: 'lastName cannot be empty'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'username cannot be null',
        },
        notEmpty: {
          msg: 'username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'email cannot be null',
        },
        notEmpty: {
          msg: 'email cannot be empty'
        },
        isEmail: {
          msg: 'Invalid email'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'role cannot be null',
        },
        notEmpty: {
          msg: 'role cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'password cannot be null',
        },
        notEmpty: {
          msg: 'password cannot be empty'
        }
      }
    },
    confirmPassword: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'confirmPassword cannot be null',
        },
        notEmpty: {
          msg: 'confirmPassword cannot be empty'
        }
      },
      set(value) {
        if (this.password.length < 7) {
          throw new AppError('Password length must be greater than 7');
        }
        if (value === this.password) {
          const hashPassword = bcrypt.hashSync(value, 10);
          this.setDataValue('password', hashPassword);
        } else {
          throw new AppError('Password and confirm password must be same', 400);
        }
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  },

  {
    paranoid: true,
    freezeTableName: true,
    modelName: 'users'
  },
);

module.exports =  user;