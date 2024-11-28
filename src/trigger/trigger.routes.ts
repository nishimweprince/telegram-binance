import { Router } from 'express';
import { TriggerController } from './trigger.controller';

const router = Router();

// INITIALIZE TRIGGER CONTROLLER
const triggerController = new TriggerController();

// ROUTES
router.post('/send-message', triggerController.sendMessage);

export default router;
