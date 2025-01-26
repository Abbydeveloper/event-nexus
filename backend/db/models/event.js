const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

module.exports = sequelize.define(
    'events',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'title cannot be null',
                },
                notEmpty: {
                    msg: 'title cannot be empty',
                },
            },
        },
        eventImage: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'productImage cannot be null',
                },
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'description cannot be null',
                },
                notEmpty: {
                    msg: 'description cannot be empty',
                },
            },
        },
        shortDesc: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'shortDescription cannot be null',
                },
                notEmpty: {
                    msg: 'shortDescription cannot be empty',
                },
            },
        },
        category: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'category cannot be null',
                },
            },
        },
        createdBy: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    },
    {
        paranoid: true,
        freezeTableName: true,
        modelName: 'events',
    }
);