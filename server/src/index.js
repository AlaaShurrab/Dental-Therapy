import Debug from 'debug';
import http from 'http';

import app from './app';
import config from './config';

const debug = Debug('server');

process.on('uncaughtException', (err) => {
  debug('an uncaught exception detected', err);
  process.exit(-1);
});

const { port } = config.server;
app.set('port', port);

const server = http.createServer(app);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

server.listen(5000);
server.on('listening', onListening);
