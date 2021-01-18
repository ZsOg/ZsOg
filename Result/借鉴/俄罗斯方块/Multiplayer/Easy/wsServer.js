var app = require('http').createServer()
var io = require('socket.io')(app)
var PORT = 3000
var clientCount = 0
var socketMap = {};
app.listen(PORT)
io.on('connection', function (socket) {
	clientCount = clientCount + 1;
	socket.clientNum = clientCount;
	socketMap[clientCount] = socket;
	if (clientCount % 2 == 1) {
		socket.emit('waiting', 'waiting for another player');
	} else {
		socket.emit('start');
		socketMap[(clientCount - 1)].emit('start');
	}
	socket.on('init', function (data) {
		if (socket.clientNum % 2 == 0) {
			socketMap[socket.clientNum - 1].emit('init', data);
		} else {
			socketMap[socket.clientNum + 1].emit('init', data);
		}
	});
	socket.on('disconnect', function () {
		io.emit('leave', socket.nickname + ' left')
	})
});

console.log("websocket server listening on port " + PORT)
