const router = require("express").Router();

const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { User, Board, Note } = require("../models");

router.get("/", async (req, res) => {
  try {
    const boards = await Board.findAll({
      where: {
        userId: 1,
      },
      include: {
        model: Note,
        attributes: {
          exclude: ["boardId"],
        },
      },
    });
    res.json(boards);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.findByPk(1);
    const board = await Board.create({ ...req.body, userId: user.id });
    res.json(board);
  } catch (error) {
    res.status(400).json(`Error creating new board: ${error}`);
  }
});

router.delete("/:id", async (req, res) => {
  const board = await Board.findByPk(req.params.id);
  if (board) {
    await board.destroy();
    res.json("Board deleted successfully");
  } else {
    res.status(400).json(`Error deleting board: ${error}`);
  }
});

module.exports = router;
