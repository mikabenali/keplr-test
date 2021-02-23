import {Entity, Column, PrimaryColumn, ManyToMany, JoinTable} from "typeorm"
import {Product} from "./product.model";
import {IsInt, Validate} from "class-validator";
import IsFloatValidator from "../validators/is_float.validator";

@Entity()
export class Order {
   @Column()
   @PrimaryColumn()
   @IsInt()
   id: number;

   @Column('float')
   @Validate(IsFloatValidator)
   vat: number;

   @Column('float')
   @Validate(IsFloatValidator)
   total: number;

   @ManyToMany(type => Product, {cascade: true})
   @JoinTable()
   products: Product[]
}
