import { Router } from 'express';
import triggerRoutes from '../trigger/trigger.routes';

const router = Router();

// ROUTES
router.use('/trigger', triggerRoutes);
export default router;
