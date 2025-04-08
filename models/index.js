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


module.exports = sequelize;