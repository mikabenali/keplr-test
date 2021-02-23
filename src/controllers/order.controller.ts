import {Request, Response} from 'express'
import {getManager} from "typeorm"
import {orderParser} from "../utils/order_parser.utils";
import {Product} from "../models/product.model";
import {Order} from "../models/order.model";

export const createOrder = async (req: Request, res: Response) => {
   const body = req.body;

   const data = orderParser(body);

   const product1 = new Product();
   product1.id = 'AZE';
   product1.name = 'Burger';
   product1.price = 123.45;

   const order1 = new Order();
   order1.id = 1234;
   order1.vat = 234.45;
   order1.total = 34.45;
   order1.products = [product1];

   const orderRepository = getManager().getRepository(Order);
   await orderRepository.save(order1);

   return res.sendStatus(201);
}
