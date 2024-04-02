const Content = require("./content");
const Note = require("./note");
const User = require("./user");
const Board = require("./board");

User.hasMany(Board);
Board.belongsTo(User);

Board.hasMany(Note);
Note.belongsTo(Board);

Note.hasMany(Content);
Content.belongsTo(Note);

module.exports = {
  Note,
  User,
  Board,
  Content,
};
