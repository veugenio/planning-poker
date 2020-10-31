const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4000;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let clients = [];
let players = [];

io.on("connection", (socket) => {
  console.log("New client connected: ", socket.id);
  // console.log(socket)

  // Connections pool.
  clients.push(socket);

  registerNewPlayer(socket);


  socket.on('select-card', value => {
    console.log('select-card: ', socket.id, value);

    players.forEach(player => {
      if (player.id === socket.id) {
        player.value = value;
      }
    });

    broadcastPlayers(socket);
  });

  socket.on("disconnect", (data) => {
    console.log("Client disconnected: ", socket.id);

    // Update clients id.
    clients = clients.filter(client => client.id !== socket.id);
    // Remove player
    removePlayer(socket);
  });
});

const removePlayer = socket => {
  players = players.filter(player => player.id !== socket.id);
  broadcastPlayers(socket);
}

const registerNewPlayer = socket => {

  players.push({
    name: 'Anonymous',
    id: socket.id,
    value: -1
  });

  broadcastPlayers(socket);
}

const broadcastPlayers = socket => {
  clients.forEach(client => {
    client.emit("players-update", { players: players });
  })
}

server.listen(port, () => console.log(`Listening on port ${port}`));