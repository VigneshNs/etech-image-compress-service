var express = require('express'),
    app = express(),
    port = process.env.PORT || 3501,
    bodyParser = require('body-parser');
var cors = require('cors');
var routes=require('./route');

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());  
routes.loadRoutes(app);
app.listen(port);
app.get('/test', function (req, res) {
    res.send("Image Compress and Upload service Success !");
});

console.log('Image Compress and Upload service started on: ' + port);

module.exports = app;