const { DataTypes } = require('sequelize');
const sequelize = require("./index");

const Todo = sequelize.define('Todo', {
  task: {
      type: DataTypes.STRING,
      allowNull: false
  },
  userId: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
}, {
  tableName: 'Todos',
  timestamps: true
});

module.exports = Todo;
