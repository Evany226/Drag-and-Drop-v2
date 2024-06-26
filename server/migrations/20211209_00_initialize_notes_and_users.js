const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("contents", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      taskitem: {
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable("notes", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    await queryInterface.createTable("users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    });
    await queryInterface.createTable("boards", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      boardname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    await queryInterface.addColumn("boards", "user_id", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    });

    await queryInterface.addColumn("notes", "board_id", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "boards", key: "id" },
    });

    await queryInterface.addColumn("contents", "note_id", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "notes", key: "id" },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("notes");
    await queryInterface.dropTable("boards");
    await queryInterface.dropTable("users");
    await queryInterface.dropTable("contents");
  },
};
