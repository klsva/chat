import express from 'express';
import http from 'http';
import cors from 'cors';
import {Server} from 'socket.io';
import usersHandler from './src/usersHandler.js';
import messagesHandler from './src/messageHandler.js';

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    //methods: ["GET", "POST"],
  }
}) 
const host = '127.0.0.1'
const port = 3001
const log = console.log

let clients = []

io.on('connection', (socket) => {
  log(`Client with id ${socket.id} connected`)
  clients.push(socket.id)

  usersHandler(socket, io);
  messagesHandler(socket, io);

  socket.on('disconnect', () => {
    clients.splice(clients.indexOf(socket.id), 1)
    log(`Client with id ${socket.id} disconnected`)
  })  
});

server.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)
