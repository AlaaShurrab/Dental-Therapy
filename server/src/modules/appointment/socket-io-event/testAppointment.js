const testAppointment = (io, socket) => (data) => {
  socket.emit('testAppointment', `${data} joined the test appointment`);
};

export default testAppointment;
