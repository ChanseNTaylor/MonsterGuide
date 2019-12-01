// Import the dependencies
const express = require('express');
const mongoose = require('mongoose');

// Creating a Router
const router = express.Router();

// Link
const monsters = mongoose.model('Monsters');

router.get('/', (req, res) =>
{
    monsters.find({ family: "Slime" }, (err, docs) =>
    {
        if(!err) { res.render("index", { title: docs }); }
    });
});

module.exports = router;