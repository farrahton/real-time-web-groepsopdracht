/*
https://socket.io/get-started/chat
*/
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 4242

app.use(express.static(path.resolve('public')))

io.on('connection', (socket) => {
  // pickCharacter()
  console.log('a user connected')

  socket.on('message', (message) => {
    console.log(users);
    io.emit('message', message)
    io.emit('users', users)
  })

  // socket.on('users', (message) => {
  //   console.log(users);
  //   io.emit('users', users)
  // })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(port, () => {
  console.log('listening on port ', port)
})

var users = [""];
const testFolder = './public/images';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    users.push("images/"+file);
    // console.log(file);
    
  });
});