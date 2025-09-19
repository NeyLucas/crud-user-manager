import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { userHandler } from './middlewares/userHandler.js';
const app = express();

// Middleware para permitir que o Express entenda JSON no corpo das requisições.
app.use(express.json());

// Agrupa todas as rotas de usuários sob o prefixo '/users'.
app.use('/users', userRoutes);

// Middleware de tratamento de erros. Deve ser o último a ser registrado.
app.use(userHandler);

export default app;