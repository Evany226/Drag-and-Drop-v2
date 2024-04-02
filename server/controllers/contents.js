const router = require("express").Router();

const { Note, Content } = require("../models");

router.get("/", async (req, res) => {
  try {
    const contents = await Content.findAll();
    res.json(contents);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const note = await Note.findByPk(1);
    const content = await Content.create({ ...req.body, noteId: note.id });
    res.json(content);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const content = await Content.findByPk(req.params.id);
  if (content) {
    await content.destroy();
    res.json("Content item deleted successfully");
  } else {
    res.status(204).end();
  }
});

router.put("/:id", async (req, res) => {
  const content = await Content.findByPk(req.params.id);
  if (content) {
    content.taskitem = req.body.taskitem;
    await content.save();
    res.json(content);
  } else {
    res.status(404).end();
  }
});
module.exports = router;
