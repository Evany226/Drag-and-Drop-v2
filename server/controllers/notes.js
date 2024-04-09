const router = require("express").Router();

const { Note, User, Content } = require("../models");

const { validateAccessToken } = require("../middleware/auth0.middleware.js");

router.get("/", async (req, res) => {
  try {
    const paramId = req.query.boardId;
    const notes = await Note.findAll({
      where: {
        boardId: paramId,
      },
      include: {
        model: Content,
        attributes: {
          exclude: ["noteId"],
        },
      },
    });
    res.json(notes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

router.post("/", validateAccessToken, async (req, res) => {
  try {
    // const authId = req.auth.payload.sub;
    const paramId = req.query.boardId;
    console.log(req.body);
    const note = await Note.create({
      ...req.body,
      boardId: paramId,
    });

    const newNote = await Note.findAll({
      where: {
        id: note.id,
      },
      include: {
        model: Content,
        attributes: {
          exclude: ["noteId"],
        },
      },
    });
    res.json(newNote);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  if (note) {
    await note.destroy();
    res.json("Note deleted successfuly");
  }
  res.status(204).end();
});

router.put("/:id", async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  if (note) {
    note.name = req.body.name;
    note.content = req.body.content;
    await note.save();
    console.log(JSON.stringify(note));
    res.json(note);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
