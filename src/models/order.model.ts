import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";


export interface OrderAttributes {
    id?: number;
    vat?: number;
    total?: number;
}

export interface OrderModel extends Model<OrderAttributes>, OrderAttributes {}
export class Order extends Model<OrderModel, OrderAttributes> {}

export type OrderStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): OrderModel;
}

export function OrderFactory (sequelize: Sequelize): OrderStatic {
    return <OrderStatic>sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        vat: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    })
}

