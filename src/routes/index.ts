import { Router } from 'express';
import TickerRouter from './ticket.route'

const router = Router();

router.use('/ticket', TickerRouter);

export default router;
