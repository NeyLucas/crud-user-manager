import express from 'express';
import userController from '../controllers/userController.js';
import {
  validateUserBody,
  validateEmail,
} from '../middlewares/userMiddleware.js';

const router = express.Router();

// Rotas do endpoint User com middlewares de validação
router.get('/', userController.getAll);
router.post('/', validateUserBody, validateEmail, userController.create);
router.put('/:id', validateUserBody, validateEmail, userController.update);
router.delete('/:id', userController.delete);

export default router;
