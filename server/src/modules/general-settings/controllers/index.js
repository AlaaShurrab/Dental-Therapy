import { Router } from 'express';
import getGeneralSettings from './get-general-settings';
import updateGeneralSettings from './update-settings';

const router = Router();

router.get('/', getGeneralSettings);
router.put('/', updateGeneralSettings);

export default router;
