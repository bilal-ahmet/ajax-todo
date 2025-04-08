const { DataTypes } = require('sequelize');
const sequelize = require("./index");

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'Users',
    timestamps: true
});

module.exports = User;
