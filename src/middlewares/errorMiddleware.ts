import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction): void => {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Internal server error' });
};
