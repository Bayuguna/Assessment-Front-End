import { Server } from "socket.io";

const SocketIO = (req:any, res:any) => {
  if (res.socket.server.io) {
    console.log("Already set up bro");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on("connection", (socket) => {
    socket.on("send-message", (obj) => {
        io.emit("receive-message", obj);
    });

    socket.on('input-change', msg => {
      socket.broadcast.emit('update-input', msg)
    })

    socket.on('add-cart', msg => {
      socket.broadcast.emit('update-cart', msg)
    })
  });

  console.log("Setting up socket");
  res.end();
}

export default SocketIO;