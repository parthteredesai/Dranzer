const note = require("../models/note.js"); //note db model require

module.exports.getNotes = async (req, res) => {
  try {
    const noteData = await note.find();
    res.json(noteData);
  } catch (error) {
    console.log(error);
  }
};

module.exports.postNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNoteData = new note({ title: title, content: content });
    await newNoteData.save();
    res.json("Note saved");
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateNotes = (req, res) => {
  res.json({ message: "post updates" });
};

module.exports.deleteNotes = (req, res) => {
  res.json({ message: "post deleted" });
};
