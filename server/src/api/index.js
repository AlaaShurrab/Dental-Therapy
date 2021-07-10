import { Router } from 'express';
import Boom from '@hapi/boom';
import { errorMsgs } from '../services/error-handler';
import { user, appointment, generalSettings, patients } from '../modules';

const router = Router();

router.use('/users', user.controllers);
router.use('/appointments', appointment.controllers);
router.use('/settings', generalSettings.controllers);
router.use('/patients', patients.controllers);

// catch 404 error and pass it to error handler
router.use((req, res, next) => {
  next(Boom.notFound(errorMsgs.NOT_FOUND));
});

export default router;
