import {Request, Response} from 'express';
import userService from '../services/user.service';
import {UserDto} from "../dtos/user.dto";
import logger from "../config/logger";

class UserController {

    getUserById(req: Request, res: Response): void {
        const userId = Number(req.params.id);

        userService.getUserById(userId)
            .then((user) => {
                if (user) {
                    res.status(200).json({ user });
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((error) => {
                logger.error('Error fetching user:', error);
                res.status(500).json({ message: 'Internal server error' });
            });
    }


    findAll(req: Request, res: Response): void {
        const pageRequest = req.body as PageRequest;
        userService.findAll(pageRequest)
            .then((users) => {
                res.status(200).json({ users });
            })
            .catch((error) => {
                logger.error('Error fetching user:', error);
                res.status(500).json({ message: 'Internal server error' });
            });
    }


    createUser(req: Request, res: Response): void {
        const user = req.body as UserDto;
        userService.createUser(user)
            .then((user) => {
                res.status(200).json({ user });
            })
            .catch((error) => {
                logger.error('Error creating user:', error);
                res.status(500).json({ message: 'Internal server error' });
            });
    }
}

const userController = new UserController();
export default userController;
