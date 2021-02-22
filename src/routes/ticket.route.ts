import { Router } from 'express'
import {addTicket} from "../controllers/ticket.controller";

const router = Router();

router.post('/', addTicket);

export default router;
