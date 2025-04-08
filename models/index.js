const {Sequelize} = require('sequelize');

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

const User = require('./User');
const Todo = require('./Todo');

User.hasMany(Todo, { foreignKey: 'userId', onDelete: 'CASCADE' });
Todo.belongsTo(User, { foreignKey: 'userId' });


module.exports = {
    sequelize
};