import { Router } from 'express';
import getGeneralSettings from './get-general-settings';

const router = Router();

router.get('/', getGeneralSettings);

export default router;
