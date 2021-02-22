import {Request, Response} from 'express'

export const addTicket = (req: Request, res: Response) => {
   console.log(req.body)
   return res.sendStatus(200);
}
