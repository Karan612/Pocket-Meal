const mongoose = require('mongoose');
const express = require('express');

//Mongoose
const mongo_uri = 'mongodb://localhost/react-auth';
mongoose.connect(mongo_uri, function(err) {
    if(err) {
        throw err;
    } else {
        console.log('Successfully Connected To ${mongo_uri}');
    }
});

//Express
app.get('/api/home', function(req, res) {
    res.send('Welcome!');
});

app.get('/api/secret', function(req, res) {
    res.send('The Password Is Potato');
});

