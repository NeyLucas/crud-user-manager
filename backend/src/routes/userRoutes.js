import express from 'express';
import userController from '../controllers/userController.js';
import {
  validateUserBody,
  validateEmail,
} from '../middlewares/userMiddleware.js';

const router = express.Router();

// Rota para listar todos os usuários.
router.get('/', userController.getAll);

// Rota para criar um novo usuário, com middlewares de validações.
router.post('/', validateUserBody, validateEmail, userController.create);

// Rota para atualizar um usuário, com middlewares de validações.
router.put('/:id', validateUserBody, validateEmail, userController.update);

// Rota para deletar um usuário.
router.delete('/:id', userController.delete);

export default router;
