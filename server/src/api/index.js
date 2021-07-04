import { Router } from 'express';
import Boom from '@hapi/boom';
import { errorMsgs } from '../services/error-handler';
import { user, appointment } from '../modules';

const router = Router();

router.use('/users', user.controllers);
router.use('/appointments', appointment.controllers);

// catch 404 error and pass it to error handler
router.use((req, res, next) => {
  next(Boom.notFound(errorMsgs.NOT_FOUND));
});

export default router;
