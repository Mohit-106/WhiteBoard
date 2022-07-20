const express = require("express");
const socket = require("socket.io");
const app = express();
app.use(express.static("public"));
let port = process.env.PORT || 3000;

let server = app.listen(port, () => {
  console.log("listening to port " + port);
});

let io = socket(server);
io.on("connection", (socket) => {
  console.log("make connection");

  socket.on("beginPath", (data) => {
    io.sockets.emit("beginPath", data);
  });
  socket.on("drawStroke", (data) => {
    io.sockets.emit("drawStroke", data);
  });
  socket.on("redoundo", (data) => {
    io.sockets.emit("redoundo", data);
  });
});
