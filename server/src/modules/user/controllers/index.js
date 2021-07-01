import { Router } from 'express';
import logout from './logout';
import login from './login';

const router = Router();

router.post('/login', login);
router.post('/logout', logout);

export default router;
