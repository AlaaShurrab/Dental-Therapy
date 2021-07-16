import { Router } from 'express';
import getAppointments from './get-appointments';
import createAppointments from './create-appointments';
import availableAppointments from './available-appointments';
import removeAppointments from './remove-appointments';

const router = Router();

router.get('/', getAppointments);
router.post('/', createAppointments);
router.delete('/:id', removeAppointments);
router.get('/available', availableAppointments);

export default router;
