var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/RestApp'));
app.use(express.static(path.join(__dirname, '/RestApp')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('*', function (req, resp) {
    resp.render('index.html');
});
app.set('port', 3000);
app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});



