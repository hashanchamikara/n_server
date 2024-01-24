import http from 'http';
import app from './app';
import {connectToDatabase} from './config/database';
import UserModel from "./models/user.model";
import logger from "./config/logger";
import environment from "./config/environment";

const PORT = process.env.PORT ?? 3000;

if(environment.ENV === 'development') {
    logger.debug(`Environment variables: ${JSON.stringify(environment)}`);
} else {
    logger.info(`Environment : ${environment.ENV}`)
}

function initDatabase() {
    UserModel.sync({force: false}).then(() => logger.debug('User table created'));
    logger.debug('Models initialized');
}

// Connect to the database using Sequelize
connectToDatabase()
    .then(() => {
        const server = http.createServer(app);

        server.listen(PORT, () => {
           logger.info(`Server is running on http://localhost:${PORT}`);
            initDatabase();

        });

    })
    .catch((error) => {
        logger.error('Unable to connect to the database:', error);
    });
