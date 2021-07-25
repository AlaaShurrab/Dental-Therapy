import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import path from 'path';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import Boom from '@hapi/boom';
import favicon from 'serve-favicon';
import logger from 'morgan';

import router from './api';
import ioHandler from './io';
import config from './config';
import * as constants from './constants';
import { requireHTTPS } from './api/middleware';

const { PRODUCTION, TEST } = constants.envTypes;

const debug = Debug('server');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.io = io;

app.use(logger('dev'));

if (config.common.env === PRODUCTION) {
  app.use(requireHTTPS);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', router);

io.on('connection', ioHandler(io));

if (config.common.env === PRODUCTION) {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  app.use(
    favicon(path.join(__dirname, '..', 'client', 'build', 'favicon.ico'))
  );

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

// eslint-disable-next-line no-unused-vars
app.use((err, _, res, next) => {
  let error = err;
  if (!Boom.isBoom(err)) {
    error = Boom.badImplementation(err.message);
    if (config.common.env !== TEST) {
      debug(error);
    }
  }
  const { statusCode, payload } = error.output;

  return res.status(statusCode).json({
    data: { ...error.data },
    ...payload,
  });
});

export { app, server, io };
