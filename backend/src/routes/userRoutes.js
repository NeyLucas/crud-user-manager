import express from 'express';
import userController from '../controllers/userController.js';
import { validateUserBody } from '../middlewares/userMiddleware.js';

const router = express.Router();

// Rota para listar todos os usuários.
router.get('/', userController.getAll);

// Rota para criar um novo usuário, com middleware de validação.
router.post('/', validateUserBody, userController.create);

// Rota para atualizar um usuário, com middleware de validação.
router.put('/:id', validateUserBody, userController.update);

// Rota para deletar um usuário.
router.delete('/:id', userController.delete);

export default router;