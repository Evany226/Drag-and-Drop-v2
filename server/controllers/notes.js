const router = require("express").Router();

const { Note } = require("../models");

const { validateAccessToken } = require("../middleware/auth0.middleware.js");

router.get("/", async (req, res) => {
  const notes = await Note.findAll();
  res.json(notes);
});

router.post("/", validateAccessToken, async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.json(note);
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

router.delete("/:id", validateAccessToken, async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  if (note) {
    await note.destroy();
    res.json("Note deleted successfuly");
  }
  res.status(204).end();
});

router.put("/:id", validateAccessToken, async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  if (note) {
    note.name = req.body.name;
    note.content = note.body.content;
    await note.save();
    res.json(note);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
