import {Entity, Column, PrimaryColumn, ManyToMany, JoinTable} from "typeorm"
import {Order} from "./order.model";

@Entity()
export class Product {
   @Column({type: 'real'})
   @PrimaryColumn()
   id: string;

   @Column()
   name: string;

   @Column('float')
   price: number;
}
