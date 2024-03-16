const express = require("express");
const router = express.Router();
const Notes = require('../models/Notes');
const fetchUser = require('../middlewares/fetchUser');
const { checkSchema, validationResult } = require('express-validator');
const NotesValidtionSchema = require('../Validator/NotesValidationSchema');

//Get All notes..
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error." })
    }

});


//Add a new notes..
router.post('/addnote', checkSchema(NotesValidtionSchema), fetchUser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ error: result.array() });
        };
        const note = new Notes({
            title, description, tag, user: req.user.id,
        });
        const savedNote = await note.save();
        res.json(savedNote);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error." })
    }

});


//Update an existing note...
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    try {
        //Destructuring body..
        const { title, description, tag } = req.body;
        //Create new note..
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //Find the Note and update it...
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found"); }

        //Authenticated user own this note then he can update it...
        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed."); }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.status(200).send({ note });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error." })
    }
});


//Delete a note...
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        //Finding the note by id..
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found."); }

        //Allowing user to delete note who own this note...
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed.");
        }

        //Deleting the note..
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted.", note: note });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error." })
    }
});

module.exports = router;