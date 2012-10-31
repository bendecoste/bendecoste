var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(9000);

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.engine('jade', require('jade').__express);

  app.use('/js', express.static(__dirname + '/js'));
  app.use('/css', express.static(__dirname + '/css'));
  app.use('/img', express.static(__dirname + '/img'));
});

function renderTemplate(req, res, page, variales) {
  res.render(page);
}

app.get('/', function(req, res) {
  renderTemplate(req, res, 'index.jade');
});

app.get('/', function(req, res) {
  renderTemplate(req, res, 'winnie.jade');
});
