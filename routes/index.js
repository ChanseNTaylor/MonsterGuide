"use strict";
// Import the dependencies
const express = require('express');
const mongoose = require('mongoose');

// Creating a Router
const router = express.Router();

// Link
const monsters = mongoose.model('Monsters');

router.get('/', (req, res, err) =>
{
    res.render("index");

    /*monsters.find({ family: "Slime" }, (err, docs) =>
    {
        if(!err) { res.render("index", { title: docs }); }
    });*/
});

router.get("/:family", (req, res, next) =>
{
    const familyArr = ["slime", "dragon", "beast", "bird", "plant", "bug", "devil", "zombie", "material", "water", "boss"];

    if(familyArr.includes(req.params.family))
    {
        res.render("family", { family: req.params.family });
    }
    
    next()
});

// router.get("/:monster", (req, res, err) => {});

module.exports = router;
