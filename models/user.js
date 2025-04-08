const { DataType } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataType.STRING,
      allowNull: false,
      unique: true,
    },
  },

  {
    tableName: "Users",
    timestamps: true,
  }
);

module.exports = User;
