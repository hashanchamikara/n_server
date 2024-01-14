import http from 'http';
import app from './app';
import {connectToDatabase, sequelize} from './config/database';

const PORT = process.env.PORT ?? 3000;

// Connect to the database using Sequelize
connectToDatabase()
    .then(() => {
        const server = http.createServer(app);

        server.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);

            sequelize.query("show tables").then((result) => console.log(result));
            console.log('Models initialized');

        });

    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
