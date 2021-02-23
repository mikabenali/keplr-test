import {Entity, Column, PrimaryColumn, ManyToMany, JoinTable} from "typeorm"
import {Product} from "./product.model";

@Entity()
export class Order {
   @Column()
   @PrimaryColumn()
   id: number;

   @Column('float')
   vat: number;

   @Column('float')
   total: number;

   @ManyToMany(type => Product, {cascade: true})
   @JoinTable()
   products: Product[]
}
