"use strict";
const mongoose = require('mongoose');

// Attributes of the Course object
const monstersSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: 'This field is required!'
    },
    family: {
        type: String,
        required: 'This field is required!'
    },
    DWM2_Only: {
        type: Boolean,
        required: 'This field is required!'
    }
});

mongoose.model('Monsters', monstersSchema);
