import dotenv from 'dotenv';
import logger from "./logger";

dotenv.config(); // Load environment variables from .env file

const environment = {
    PORT: process.env.PORT ?? 3000,
    DB_HOST: process.env.DB_HOST ?? 'localhost',
    DB_PORT: process.env.DB_PORT ?? 3306,
    DB_USER: process.env.DB_USER ?? '',
    DB_PASSWORD: process.env.DB_PASSWORD ?? '!',
    DB_NAME: process.env.DB_NAME ?? '',
};

logger.debug('Environment variables: ', environment)
export default environment;
