const express = require('express');
const http = require('http');
const socetIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo (server);