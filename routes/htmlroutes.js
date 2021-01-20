const router = require("express").Router();
const path = require("path");



router.get("/notes", (req, res) =>{
    req.sendFile(path.join(__dirname, "../public/notes.html"))
})

module.exports = router;