import {Request, Response} from 'express'
import {getManager} from "typeorm"
import {orderParser} from "../utils/order_parser.utils";
import {Product} from "../models/product.model";
import {Order} from "../models/order.model";

export const createOrder = async (req: Request, res: Response) => {
   const body = req.body;

   try {
      const order = orderParser(body);
      const orderRepository = getManager().getRepository(Order);
      await orderRepository.save(order);

      return res.sendStatus(201);
   } catch (err) {
      console.log(err);
     return res.sendStatus(500);
   }

}
