import { Router } from 'express';
import Boom from '@hapi/boom';
import { errorMsgs } from '../services/error-handler';

const router = Router();

router.use('/test', (req, res) => {
  res.send('hi from api');
});

// catch 404 error and pass it to error handler
router.use((req, res, next) => {
  next(Boom.notFound(errorMsgs.NOT_FOUND));
});

export default router;
