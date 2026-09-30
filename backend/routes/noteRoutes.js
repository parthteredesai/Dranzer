const express = require("express");
const router = express.Router();

const noteController = require("../controller/noteController.js");

// /notes

//get notes
router.get("/", noteController.getNotes);

//view note
router.get("/:id", noteController.viewNote);

//post notes
router.post("/", noteController.postNotes);

//update notes
router.put("/:id", noteController.updateNotes);

//delete notes
router.delete("/:id", noteController.deleteNotes);

module.exports = router;
