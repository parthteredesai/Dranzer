module.exports.getNotes = (req, res) => {
  res.send("created note");
};

module.exports.postNotes = (req, res) => {
  res.json({ message: "post created" });
};

module.exports.updateNotes = (req, res) => {
  res.json({ message: "post updates" });
};

module.exports.deleteNotes = (req, res) => {
  res.json({ message: "post deleted" });
};
