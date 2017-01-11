var express = require('express');
var exec = require('child_process').exec;
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

// Express setup
var app = express();
app.use(express.static(__dirname + '/Weather-Station-App/dist'));
app.listen(3000, function() {
    console.log('Weather Station App listening on port 3000');
});

// Variables
var currentTemp;

// Functions
var init = function() {
    getTemperature();
    setInterval(() => {
        getTemperature();
    }, 10000);
};

var temperatureFileLocation = './python_scripts/temperature.py';
var getTemperature = function() {
    exec('python ' + temperatureFileLocation, function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        this.currentTemp = stdout.toString().trim();
    });
};

// Main
init();

// API
app.get('/temperature', function(req, res) {
    res.status(200).send({ 
        temperature: this.currentTemp
    });
});

