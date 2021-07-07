import { Router } from 'express';
import createAppointments from './create-appointments';
import availableAppointments from './available-appointments';

const router = Router();

router.post('/', createAppointments);
router.get('/available', availableAppointments);

export default router;
