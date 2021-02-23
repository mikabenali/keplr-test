import {Entity, Column, PrimaryColumn, IsNull} from "typeorm"
import {IsInt, IsString, Validate} from "class-validator";
import IsFloatValidator from "../validators/is_float.validator";

@Entity()
export class Product {
   @Column({type: 'real'})
   @PrimaryColumn()
   @IsString()
   id: string;

   @Column()
   @IsString()
   name: string;

   @Column('float')
   @Validate(IsFloatValidator)
   price: number;
}
