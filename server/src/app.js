import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import Boom from '@hapi/boom';
import favicon from 'serve-favicon';
import logger from 'morgan';

import router from './api';
import config from './config';
import * as constants from './constants';

const { PRODUCTION, TEST } = constants.envTypes;

const debug = Debug('server');

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', router);

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
  }
  const { statusCode, payload } = error.output;

  if (config.common.env !== TEST) {
    debug(err);
  }

  return res.status(statusCode).json({
    data: { ...error.data },
    ...payload,
  });
});

export default app;
