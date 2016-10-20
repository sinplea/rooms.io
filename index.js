const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({ extended: false }));

io.on('connection', socket => {
  const defaultRoom = 'General';
  var userList = [];

  socket.join(defaultRoom);
  socket.currentRoom = "General";

  // General Info is sent to the Info component
  // when a socket first connects
  socket.emit('setup',
  {
    currentRoom: socket.currentRoom,
    userList: userList
  });

  // !!The user list on client should display all sockets connected to the server!!
  socket.on('new room', room => {
    var string = "User left";
    socket.to(socket.currentRoom).emit('user left', string);
    socket.leave(socket.currentRoom);

    socket.currentRoom = room;
    socket.join(socket.currentRoom);

    socket.emit('new room', room);
    socket.to(socket.currentRoom).emit('user joined', 'User joined');
  });

  socket.on('new user', username => {
    socket.username = username;
    socket.emit('new user', socket.username);
  })

  socket.on('message', body => {
    socket.to(socket.currentRoom).emit('message', {
      body,
      from: socket.username || socket.id.slice(8)
    });
  });

  //Hover over bar of private text for password
})

server.listen(3000);
