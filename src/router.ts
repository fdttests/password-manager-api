import express from 'express';
import PasswordCardController from './controllers/PasswordCardController';

const router = express.Router();

router.use('/password-cards', PasswordCardController);

export default router;