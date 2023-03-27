// funciones para crear los modelos
const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define("Episodes", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    air_date: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  });
};
