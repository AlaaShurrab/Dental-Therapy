import { appointment } from '../modules';

const ioHandler = (io) => (socket) => {
  io.emit('msg', 'some one joined');

  // put the io events here
  appointment.socketIoEvent(io)(socket);

  socket.on('disconnect', () => {
    io.emit('msg', 'some one disconnected');
  });
};

module.exports = ioHandler;
