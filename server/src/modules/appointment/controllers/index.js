import { Router } from 'express';

import getAppointments from './get-appointments';
import createAppointments from './create-appointments';
import availableAppointments from './available-appointments';
import removeAppointments from './remove-appointments';

import { authenticate } from '../../../api/middleware';

const router = Router();

router.get('/', authenticate, getAppointments);
router.post('/', createAppointments);
router.delete('/:id', authenticate, removeAppointments);
router.get('/available', availableAppointments);

export default router;
