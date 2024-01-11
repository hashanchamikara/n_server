import express from 'express';
import { AuthController } from '../controllers/authController';
import { UserController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     description: Authenticate user and generate a token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login successful, returns a token
 *       '401':
 *         description: Unauthorized - Invalid credentials
 *       '500':
 *         description: Internal server error
 */
router.post('/login', AuthController.login);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user
 *     description: user
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/:id', authMiddleware, UserController.getUserById);
export default router;
