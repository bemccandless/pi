var express = require('express');
var exec = require('child_process').exec;

var app = express();
var temperatureFileLocation = './python_scripts/temperature.py';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000, function() {
    console.log('Weather Station App listening on port 3000');
});

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