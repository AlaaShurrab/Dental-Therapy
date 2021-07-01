import { Router } from 'express';

import logout from './logout';

const router = Router();

router.post('/logout', logout);

export default router;
