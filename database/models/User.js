const { Sequelize } = require(".");
const DataTypes = require('sequelize/lib/data-types');

const name = 'Users'
const details = {
    idUsers: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING(255),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    bithday: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    passwordCheck: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
}
const setting = {
    tableName: 'Users',
    timestamps: false
}

module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define(name, details, setting);
    return User;
}