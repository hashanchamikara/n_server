import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
    static async getUserById(req: Request, res: Response): Promise<void> {
        const userId = Number(req.params.id);

        try {
            const user = await UserService.getUserById(userId);

            if (user) {
                res.status(200).json({ user });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
