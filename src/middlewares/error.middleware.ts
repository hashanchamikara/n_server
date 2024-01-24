import { Request, Response, NextFunction } from 'express';
import logger from "../config/logger";

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction): void => {
    logger.error('Error occurred:', error);
    res.status(500).json({ message: 'Internal server error' });
};
