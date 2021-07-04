import { Router } from 'express';
import availableAppointments from './available-appointments';

const router = Router();

router.get('/available', availableAppointments);

export default router;
