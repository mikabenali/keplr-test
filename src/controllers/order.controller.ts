import {Request, Response} from 'express'
import {validate} from "class-validator";
import {getManager} from "typeorm"
import {orderParser} from "../utils/order_parser.utils";
import {Order} from "../models/order.model";
import {OrderError} from "../models/order_error.model";

export const createOrder = async (req: Request, res: Response) => {
   const body = req.body;

   try {
      const order = orderParser(body);
      const validationError = await validate(order);
      if (validationError.length > 0) {
         await createOrderError(body);
         return res.sendStatus(422);
      }

      const orderRepository = getManager().getRepository(Order);
      await orderRepository.save(order);

      return res.sendStatus(201);
   } catch (err) {
       await createOrderError(body);
       return res.sendStatus(500);
   }
}

const createOrderError = async (body: string) => {
    try {
        const orderError = new OrderError();
        orderError.ticket = body;
        const orderErrorRepository = getManager().getRepository(OrderError);
        await orderErrorRepository.save(orderError);
    } catch (err) {
        throw new Error(err);
    }
}
