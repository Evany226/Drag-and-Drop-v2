const router = require("express").Router();

const { User, Board, Note, Content } = require("../models");

router.get("/", async (req, res) => {
  const users = await User.findAll({
    include: {
      model: Board,
      attributes: { exclude: ["userId"] },
      include: {
        model: Note,
        include: {
          model: Content,
          attributes: { exclude: ["noteId"] },
        },
      },
    },
  });
  res.json(users);
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
