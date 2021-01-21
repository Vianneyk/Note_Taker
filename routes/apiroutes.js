const router = require("express").Router();
const path = require("path");



// Read the `db.json` file and return all saved notes as JSON.

router.get("/api/notes", (req, res) => {
    res.json(notes);
});

// Receives a new note, adds it to db.json then returns the new note

router.post("/api/notes", (req, res) => {   
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added new note: " + newNote.title);
});

router.get("/api/notes/:id", (req, res) => {
    res.json(notes[req.params.id]);
});

// Deletes a note with specific id

router.delete("/api/notes/:id", (req, res) => {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id " + req.params.id);
});

module.exports = router;