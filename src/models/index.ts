import { Sequelize } from "sequelize";
import {OrderFactory} from "./order.model";

const sequelize = new Sequelize(
    process.env.POSTGRES_DB || '',
    process.env.POSTGRES_USER || '',
    process.env.POSTGRES_PASSWORD || '',
    {
        host: 'database',
        dialect: 'postgres'
    }
)

export const Order = OrderFactory(sequelize);

export default sequelize;
