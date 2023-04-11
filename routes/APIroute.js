const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

router.get('/notes', (req, res) => {
let data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
res.sendFile(JSON.parse(data));
})

router.post('/notes', (req, res) => {
let data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
let notes = JSON.parse(data);
const {title, text} = req.body;
const newNote = {title, text, id: uuidv4()};
notes.push(newNote);
fs.readAndAppend('../db/db.json', JSON.stringify(notes));
res.json(newNote);
})

// router.delete('/notes/:id', (req, res) => {
// const id = req.params.id;
// let data = readFromFile('../db/db.json');

// let notes = JSON.parse(data);
// let newNotes = notes.filter(note => note.id!== id);
// writeToFile('../db/db.json',newNotes);
// res.json({msg: 'Note Deleted'});
// })

module.exports = router;