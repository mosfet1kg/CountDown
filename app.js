var express = require('express'),
    path = require('path');

var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.listen(52273, function(){
    console.log('This server is running on the port ' + this.address().port);
});

