//This is a proxy route
//all requests are rerouted to weather api microservice.

"uses strict"

const  express = require('express');
const router = express.Router();
request = require('request');

WEATHER_API_HOST = process.env.WEATHER_API_HOST || 'weather-api';
WEATHER_API_PORT = 3000;


//handle request of locations
router.get('/weather/locations', function(req, res) {
    console.log('Received /weather/locations request');

    request('http://'+WEATHER_API_HOST+':'+WEATHER_API_PORT+'/weather/locations', function(error, response, body){
        if (error){
            res.status=500;
            res.send(error);
        }
        else{
            res.json(body);
        }
    });
});

//handle request of temperature for a given location
router.get('/weather/:location([0-9]+)', function(req, res) {
    var location=req.params.location;

    request('http://'+WEATHER_API_HOST+':'+ WEATHER_API_PORT +'/weather/'+location, function(error, response, body){
        if (error){
            res.status=500;
            res.send(error);
        }
        else{
            res.json(body);
        }
    });
});


module.exports = router;