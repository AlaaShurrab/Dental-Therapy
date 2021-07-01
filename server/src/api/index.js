import { Router } from 'express';
import Boom from '@hapi/boom';
import { errorMsgs } from '../services/error-handler';
import { user } from '../modules';

const router = Router();

router.use('/users', user.controllers);

// catch 404 error and pass it to error handler
router.use((req, res, next) => {
  next(Boom.notFound(errorMsgs.NOT_FOUND));
});

export default router;
