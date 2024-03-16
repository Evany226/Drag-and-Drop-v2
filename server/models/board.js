const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../util/db");

class Board extends Model {}

Board.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    boardname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "board",
    indexes: [{ unique: true, fields: ["boardname"] }],
  }
);

module.exports = Board;
