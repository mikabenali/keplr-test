import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class OrderError {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ticket: string;
}
