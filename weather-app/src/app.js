"uses strict"

const Express = require('express');
const routeEntry = require('./routes/index.js');
const routeWeather = require('./routes/weather.js')
const port = process.env.APP_PORT || 3333;
const app = Express();
const browserify = require("browserify");
const fs = require('fs');

var BodyParser = require('body-parser');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded());
app.use(routeEntry);
app.use(routeWeather);
app.use('/bootstrap', Express.static(__dirname + '/node_modules/react-bootstrap/dist/'));

app.use('/', Express.static('./src'));

app.get('/health', function(req,res){
    res.status(200);
    res.end("Healthy");
});

// catch 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.end();
    //next(err);
});
app.listen(port);

browserify(["./src/ui.js"])
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(fs.createWriteStream("./src/dist/bundle.js"));


console.log("Listening on port", port);
module.exports = app;