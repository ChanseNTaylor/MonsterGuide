const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/monsters';

mongoose.connect(URL, { useNewUrlParser: true }, (err, client) =>
{
    if (!err)
    {
        console.log('Successfully Established Connection with MongoDB');
    }
    else
    {
        console.log(`Failed to Establish Connection with MongoDB with Error: ${err}`);
    }
});

//Connecting Node and MongoDB
require('./course.model');