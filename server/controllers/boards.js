const router = require("express").Router();

const { Board, Note } = require("../models");

router.get("/all", async (req, res) => {
  try {
    const boards = await Board.findAll({
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

module.exports = router;
