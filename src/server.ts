import http from 'http';
import app from './app';
import {connectToDatabase, sequelize} from './config/database';
import UserModel from "./models/user.model";

const PORT = process.env.PORT ?? 3000;

function initDatabase() {
    UserModel.sync({force: false, alter: true}).then(() => console.log('User table created'));
    console.log('Models initialized');
}

// Connect to the database using Sequelize
connectToDatabase()
    .then(() => {
        const server = http.createServer(app);

        server.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            initDatabase();

        });

    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
