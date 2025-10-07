import { testDatabaseConnection } from './config/db.js';
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

// Define fallback de segurança.
const PORT = process.env.PORT || 3000;

async function startServer() {
  await testDatabaseConnection();

  app.listen(PORT);
}

// Inicializa servidor.
startServer();
