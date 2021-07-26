import { Router } from 'express';

import createAppointments from './create-appointments';
import availableAppointments from './available-appointments';
import removeAppointments from './remove-appointments';
import bookedAppointments from './booked-appointments';

const router = Router();

router.post('/', createAppointments);
router.delete('/:id', removeAppointments);
router.get('/available', availableAppointments);
router.get('/booked', bookedAppointments);

export default router;
