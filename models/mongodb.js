const mongoose = require('mongoose');

const URL = 'mongodb://monsterMaster:CakeGun@142.93.63.104:27017/monsters';

mongoose.connect(URL, { useNewUrlParser: true }, (err, client) =>
{
    if (!err)
    {
        console.log('Established Connection with MongoDB');
    }
    else
    {
        console.log(`Failed to connect to MongoDB with Error: ${err}`);
    }
});

//Connecting Node and MongoDB
require('./course.model');