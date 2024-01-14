import express from 'express';
import {json} from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import {errorMiddleware} from './middlewares/error.middleware';
import userRouter from "./routes/user.router";
import swaggerUi from 'swagger-ui-express';
import specs from './config/swagger';


const app = express();

app.use(cors());
app.use(json());
app.use(morgan('dev'));

// api-docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/auth', userRouter);
app.use('/users', userRouter);

// Error handling middleware
app.use(errorMiddleware);

export default app;
