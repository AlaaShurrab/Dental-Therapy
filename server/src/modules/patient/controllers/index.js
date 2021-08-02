import { Router } from 'express';
import getPatients from './get-patients';

const router = Router();

router.get('/', getPatients);

export default router;
