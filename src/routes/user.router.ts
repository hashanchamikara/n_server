import express, {NextFunction, Request, Response} from "express";
import {UserController} from '../controllers/user.controller';

const userRouter = express.Router();

const userController = new UserController();


/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user with pagination, filtering, and sorting options
 *     description: Create a new user with optional pagination, filtering, and sorting options.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: integer
 *                 description: The page number for pagination.
 *               size:
 *                 type: integer
 *                 description: The number of items per page.
 *               direction:
 *                 type: string
 *                 description: The sorting direction (asc or desc).
 *               filter:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     field:
 *                       type: string
 *                       description: The field to filter on.
 *                     operator:
 *                       type: string
 *                       description: The comparison operator (eq, gt, lt, etc.).
 *                     value:
 *                       type: string
 *                       description: The value to filter on.
 *                   example:
 *                     field: name
 *                     operator: eq
 *                     value: John
 *               sort:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     field:
 *                       type: string
 *                       description: The field to sort on.
 *                     direction:
 *                       type: string
 *                       description: The sorting direction (asc or desc).
 *                   example:
 *                     field: createdAt
 *                     direction: desc
 *             example:
 *               page: 1
 *               size: 10
 *               direction: asc
 *               filter:
 *                 - field: name
 *                   operator: eq
 *                   value: John
 *                 - field: age
 *                   operator: gt
 *                   value: '25'
 *               sort:
 *                 - field: createdAt
 *                   direction: desc
 *                 - field: name
 *                   direction: asc
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - id: '123'
 *                 name: 'John Doe'
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: 'User not found'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: 'Internal server error'
 */
userRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    next();
}, userController.findAll);


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: {"user":{"id":1,"username":"john_doe","email":"john.doe@example.com","password":"secure_password","createdAt":"2024-01-14T06:01:00.000Z","updatedAt":"2024-01-14T06:01:00.000Z"}}
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             example: { message: 'User not found' }
 */
userRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    next();
}, userController.getUserById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided attributes.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The password for the user.
 *             example:
 *               username: john_doe
 *               email: john.doe@example.com
 *               password: secure_password
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               username: john_doe
 *               email: john.doe@example.com
 *               password: secure_password
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: 'Invalid request. Check your input.'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: 'Internal server error'
 */
userRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    next();
}, userController.createUser);
export default userRouter;
