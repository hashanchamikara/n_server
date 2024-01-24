
import { Sequelize } from 'sequelize';
import environment from "./environment";
import logger from "./logger";

export const sequelize = new Sequelize(environment.DB_NAME, environment.DB_USER, environment.DB_PASSWORD, {
    host: environment.DB_HOST,
    dialect: 'mysql',
    logging: true,
    sync: { force: true, alter: true },
    port: environment.DB_PORT as number,
    pool: {
        max: 5,
        min: 0,
        idle: 30000,
     }
});
export default sequelize;


export const connectToDatabase = async (): Promise<Sequelize> => {
    try {
        await sequelize.authenticate();
        logger.debug('Database connection established: ', sequelize.getDatabaseName());
        return sequelize;
    } catch (error) {
        logger.error('Database connection error:', error);
        throw error;
    }
};