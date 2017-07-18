"uses strict"

const  express = require('express');
const router = express.Router();


//temporary hard-coding temperatures of the last 7 days.
var data = {
    1 : [91,92,93,94,95,96,97],
    2 : [92,93,94,95,96,97,98],
    3 : [93,94,95,96,97,98,99],
    92708: [92708,92709,92710,92711,92712,92713,92714],
    92618: [92618,92619,92620,92621,92622,92623,92624]
    }

router.get('/', function(req, res) {
    console.log("Received home page request");
    res.send("Received home page request")
});

//get weather for a given location
//return status 416 if location is currently not supported
router.get('/weather/:location([0-9]+)', function(req,res){
    console.log("weather was requested")

    var location=req.params.location;
    console.log("Requesting loc: ", location)
    if (typeof data[location] === 'undefined'){
        res.statusCode = 416;
        err_status="Unknown location.  Currently service only works for the following area: 1, 2, 3, 92708, 92618"
        res.send({status: err_status,data:[]});
    } else{
        res.json({data:data[location]})
    }
});

//return a list of current supported locations
router.get('/weather/locations', function(req,res){
    locations = Object.keys(data);
    res.json({data:locations});
})

module.exports = router;