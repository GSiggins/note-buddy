const express = require('express').Router();
const uuid = require('uuid');
const fs = require('fs');
const { stringify } = require('querystring');

express.get('api/notes', (req, res) => {
    fs.readFile('../db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotesObjs = JSON.parse(data);
            console.log(parsedNotesObjs)
        }
    }
    )
})

express.post('api/notes', (req, res) => {
    const { title, note } = req.body
    if (req.body) {
        const newNote = {
            title: '',
            note: '',
            id: uuid,
        }
        fs.readFile('../db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                const parsedNote = JSON.parse(data);
                fs.writeFile('../db/db.json', JSON.stringify(newNote, null, 4), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Successfully written to file');
                    }
                })
            }})
    }
})

module.exports = express;