import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
export class AuthController {
    static async login(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;

        try {
            const token = await AuthService.login(username, password);

            if (token) {
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
