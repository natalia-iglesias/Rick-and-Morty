// funciones para crear los modelos
const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define("Characters", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
    },
    species: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    episode: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  });
};
