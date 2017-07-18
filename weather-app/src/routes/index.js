"uses strict"

const  express = require('express');
const router = express.Router();

router.get('/test', function(req, res) {
    console.log("Received authentication request");
    res.send("Received authentication request")
});


module.exports = router;