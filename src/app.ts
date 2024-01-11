import express from 'express';
import {json} from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import {errorMiddleware} from './middlewares/errorMiddleware';
import router from "./routes/Router";
import swaggerUi from 'swagger-ui-express';
import specs from './config/swagger';


const app = express();

// Middleware
app.use(cors());
app.use(json());
app.use(morgan('dev'));

// api-docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/auth', router);
app.use('/users', router);

// Error handling middleware
app.use(errorMiddleware);

export default app;
