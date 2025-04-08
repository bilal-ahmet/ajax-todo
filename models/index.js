const {Sequelize} = require('sequelize');

const User = require('./user');
const Todo = require('./Todo');

User.hasMany(Todo, {foreignKey: userID, onDelete: 'CASCADE'});
Todo.belongsTo(User, {foreignKey: userID});

const sequelize = new Sequelize('ajaxDB', 'sa', 'Kolsan123', {
    host: 'localhost',
    dialect: 'mssql',
    dialectModule: require('tedious'),
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
        },
    },
    logging: false
});


module.exports = sequelize;