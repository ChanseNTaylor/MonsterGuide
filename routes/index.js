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
    const familyArr = ["slime", "dragon", "beast", "bird", "plant", "bug", "devil", "zombie", "material", "water", "boss"];

    if(familyArr.includes(req.params.family))
    {
        monsters.find({ family: "Slime" }, (err, docs) =>
        {
            const familyStr = `${req.params.family[0].toUpperCase()}${req.params.family.substring(1)}`;

            res.render("family", { family: familyStr, docs: docs });
        });
    }
    else
    {
        next();
    }
});

// router.get("/:monster", (req, res, err) => {});

module.exports = router;
