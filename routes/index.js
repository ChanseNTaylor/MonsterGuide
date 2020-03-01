"use strict";
// Import the dependencies
const express = require('express');
const mongoose = require('mongoose');

// Creating a Router
const router = express.Router();

// Link
const monsters = mongoose.model('Monsters');

router.get('/', (req, res, err) => { res.render("index"); });

router.get("/:family", (req, res, next) =>
{
    const capital = `${req.params.family[0].toUpperCase()}${req.params.family.substring(1)}`
    const familyArr = ["slime", "dragon", "beast", "bird", "plant", "bug", "devil", "zombie", "material", "water", "bosse"];

    if(familyArr.includes(req.params.family))
    {
        monsters.find({ family: capital }, (err, docs) =>
        {
            res.render("family", { family: capital, docs: docs });
        });
    }
    else
    {
        next();
    }
});

router.get("/monster/:monster", (req, res, err) => 
{
    
});

module.exports = router;
