"uses strict"

const Express = require('express');
const routeEntry = require('./routes/index.js');
const port = process.env.API_PORT || 3333;
const app = Express();
var BodyParser = require('body-parser');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded());
app.use(routeEntry);
app.get('/health', function(req,res){
    res.status(200);
    res.end("Healthy");
});
// catch 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.send("URL not found.");
});
app.listen(port);
console.log("Listening on port", port);
module.exports = app;