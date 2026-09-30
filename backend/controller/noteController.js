const note = require("../models/note.js"); //note db model require

module.exports.getNotes = async (req, res) => {
  try {
    const noteData = await note.find().sort({ _id: -1 });
    res.json(noteData);
  } catch (error) {
    console.log(error);
  }
};

module.exports.viewNote = async (req, res) => {
  try {
    const fetchNote = await note.findById(req.params.id);
    if (!fetchNote) {
      res.json({ error: "Note not found" });
    }
    res.json(fetchNote);
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

module.exports.updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await note.findByIdAndUpdate(req.params.id, {
      title: title,
      content: content,
    });

    if (!updatedNote) {
      res.json({ messaage: "no data found" });
    }

    res.json({ updatedNote }, "Note updated successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteNotes = async (req, res) => {
  try {
    const deleteNote = await note.findByIdAndDelete(req.params.id);
    if (!deleteNote) {
      res.json({ message: "data not found" });
    }
    res.json({ deleteNote }, "Note deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
