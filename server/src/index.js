import Debug from 'debug';

import { server, app } from './app';
import config from './config';
import * as constants from './constants';

const { DEVELOPMENT } = constants.envTypes;

const debug = Debug('server');

process.on('uncaughtException', (err) => {
  debug('an uncaught exception detected', err);
  process.exit(-1);
});

const { port } = config.server;
app.set('port', port);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
  if (config.common.env === DEVELOPMENT)
    debug(`Local: http://localhost:${addr.port}/api`);
}

server.listen(port);
server.on('listening', onListening);
