import { Router } from 'express';
import createAppointments from './create-appointments';
import availableAppointments from './available-appointments';
import removeAppointments from './remove-appointments';
import updateAppointments from './update-appointments';

const router = Router();

router.post('/', createAppointments);
router.delete('/:id', removeAppointments);
router.patch('/:id', updateAppointments);
router.get('/available', availableAppointments);

export default router;
