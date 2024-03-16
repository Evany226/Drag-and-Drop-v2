const Note = require("./note");
const User = require("./user");
const Board = require("./board");

User.hasMany(Board);
Board.belongsTo(User);

Board.hasMany(Note);
Note.belongsTo(Board);

module.exports = {
  Note,
  User,
  Board,
};
