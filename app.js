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
var lowTemp;
var highTemp;
var startDate = new Date();

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
    if (this.lowTemp === undefined || this.currentTemp < this.lowTemp) {
        this.lowTemp = this.currentTemp;
    }
    if (this.highTemp === undefined || this.currentTemp > this.highTemp) {
        this.highTemp = this.currentTemp;
    }
};

// Main
init();

// API
app.get('/temperature', function(req, res) {
    res.status(200).send({ 
        current: this.currentTemp,
        low: this.lowTemp,
        high: this.highTemp
    });
});

