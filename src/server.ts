import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const server = createServer(app);

const io = new Server(server);

server.listen(3000, () => {
    console.log("Server is running on port 3000");
    
});