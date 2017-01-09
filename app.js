var express = require('express');
var exec = require('child_process').exec;
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/Weather-Station-App/dist'));
app.listen(3000, function() {
    console.log('Weather Station App listening on port 3000');
});

var temperatureFileLocation = './python_scripts/temperature.py';
app.get('/temperature', function(req, res) {
    exec('python ' + temperatureFileLocation, function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }

        res.status(200).send({ 
            temperature: stdout.toString().trim()
        });
    });
});

