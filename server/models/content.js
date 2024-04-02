const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../util/db");

class Content extends Model {}

Content.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    taskitem: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "content",
  }
);

module.exports = Content;
