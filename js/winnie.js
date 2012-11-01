var socket = io.connect('http://localhost:9000');
socket.on('quote', function(data) {
  $('#quotebox').fadeOut(function() {
    $('#quotebox').text(data).fadeIn(function() {
      // done
    });
  });
});

function getQuote() {
  socket.emit('getQuote');
};
