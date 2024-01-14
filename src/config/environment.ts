import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const environment = {
    PORT: process.env.PORT ?? 3000,
    DATABASE_URI: process.env.DATABASE_URI ?? 'mysql://localhost:3306/n_server',
};

export default environment;
