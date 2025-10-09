import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import { userHandler } from './middlewares/userHandler.js';
import { logger } from './middlewares/logger.js';
import cors from 'cors';

dotenv.config();
const app = express();

// Carrega a lista de origens permitidas a partir do .env para segurança.
const whitelist = process.env.CORS_ORIGIN_WHITELIST
  ? process.env.CORS_ORIGIN_WHITELIST.split(',')
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    // Permite requisições da whitelist e requisições sem origem (ex: Postman).
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Loga antes de usar o CORS.
app.use(logger);

// Aplica as regras de segurança, bloqueando origens não permitidas.
app.use(cors(corsOptions));

// Middleware para permitir que o Express entenda JSON no corpo das requisições.
app.use(express.json());

// Agrupa todas as rotas de usuários sob o prefixo '/users'.
app.use('/users', userRoutes);

// Middleware de tratamento de erros.
app.use(userHandler);

export default app;
