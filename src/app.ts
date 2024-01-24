import express from 'express';
import {json} from 'body-parser';
import cors from 'cors';
import {errorMiddleware} from './middlewares/error.middleware';
import userRouter from "./routes/user.router";
import swaggerUi from 'swagger-ui-express';
import specs from './config/swagger';
import environment from "./config/environment";
import {requestLogger, responseLogger} from "./config/logger";


const app = express();

app.use(cors());
app.use(json());
app.use(requestLogger);
app.use(responseLogger);

// api-docs route
if (environment.ENV === 'development') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

// Routes
app.use('/users', userRouter);

// Error handling middleware
app.use(errorMiddleware);

export default app;
