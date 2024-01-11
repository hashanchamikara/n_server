
import { Sequelize } from 'sequelize';
import {Connection} from "sequelize/types/dialects/abstract/connection-manager";

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'c5lus9tering',
    database: process.env.DB_NAME || 'n_server',
};
export const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql',
    logging: false,
});

export default sequelize;


export const connectToDatabase = async (): Promise<Sequelize> => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established');
        return sequelize;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};