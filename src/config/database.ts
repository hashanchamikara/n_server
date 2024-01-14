
import { Sequelize } from 'sequelize';

const dbConfig = {
    host: process.env.DB_HOST ?? 'localhost',
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? 'c5lus9tering',
    database: process.env.DB_NAME ?? 'n_server',
    port: process.env.DB_PORT?? 3306,
};
export const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql',
    logging: true,
    sync: { force: true, alter: true },
    port: dbConfig.port as number,
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
        console.log('Database connection established: ', sequelize.getDatabaseName());
        return sequelize;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};