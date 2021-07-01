import { io as Client } from 'socket.io-client';
import { assert } from 'chai';
import { server } from '../app';
import config from '../config';

const { port } = config.server;

describe('my awesome project', () => {
  let clientSocket;

  before((done) => {
    // Start the server
    const onListening = () => {
      clientSocket = new Client(`http://localhost:${port}`);
      done();
    };
    server.listen(port);
    server.on('listening', onListening);
  });

  after(() => {
    clientSocket.close();
    server.close();
  });

  it('should work', (done) => {
    clientSocket.on('testAppointment', (msg) => {
      assert.equal(msg, 'Ahmed joined the test appointment');
      done();
    });

    clientSocket.emit('testAppointment', 'Ahmed');
  });
});
