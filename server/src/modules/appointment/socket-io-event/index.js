import testAppointment from './testAppointment';

const ioHandler = (io) => (socket) => {
  socket.on('testAppointment', testAppointment(io, socket));
};

module.exports = ioHandler;
