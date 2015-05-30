'use strict';
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('vote_tracker1'));

app.get('/', function (req, res) {
  res.send('Secret Message!');
});

app.get('/secret', function (req, res, next) {
  res.send('Secret Message! Yay!');
  next(); // pass control to the next handler
});

app.use('/', function (req, res, next) {

  var options = {
    root: __dirname + '/vote_tracker1/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile('./404.html', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', './404.html');
    }
  });
})

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
