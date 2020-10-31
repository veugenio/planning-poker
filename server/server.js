const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 4000;

// Start server.
http.listen(port, () => console.log(`Listening on port ${port}`));

// Global variables.
let clients = [];
let players = [];

io.on("connection", socket => {
  console.log("New client connected: ", socket.id);

  registerNewClient(socket);

  socket.on('reset-game', () => {
    console.log('reset-game: ', socket.id);

    players.forEach(player => player.value = -1);
    broadcastPlayers(socket);
    resetGame(socket);
  });

  socket.on('set-name', value => {
    console.log('set-name: ', socket.id, value);

    players.forEach(player => {
      if (player.id === socket.id) {
        player.name = value;
      }
    });

    broadcastPlayers(socket);
  });

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
    playerRemove(socket);
  });
});


const registerNewClient = socket => {
  // Connections pool.
  clients.push(socket);
  playerAdd(socket);
}
const broadcastPlayers = socket => {
  clients.forEach(client => {
    client.emit("players-update", { players: players });
  });
}
const resetGame = socket => {
  clients.forEach(client => {
    client.emit("reset-game");
  });
}
const defaultAvatar = () => Math.random() > 0.5 ? 'gordo' : 'veia';

const playerAdd = socket => {
  players.push({
    name: 'Anonymous',
    id: socket.id,
    value: -1,
    avatar: defaultAvatar()
  });

  broadcastPlayers(socket);
}
const playerRemove = socket => {
  players = players.filter(player => player.id !== socket.id);
  broadcastPlayers(socket);
}
