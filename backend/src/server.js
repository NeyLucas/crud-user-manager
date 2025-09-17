import { testDatabaseConnection } from './config/db.js';
import app from './app.js';
const PORT = 8081;

// Função para testar e inicializar o servidor.
async function startServer() {
    await testDatabaseConnection();

    // Inicia o servidor Express na porta especificada.
    app.listen(PORT, () => console.log(`[Server] Servidor rodando na porta ${PORT}`));
}

// Inicia o processo.
startServer();
