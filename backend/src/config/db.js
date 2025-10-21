import mysql from 'mysql2/promise.js';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração SSL Obrigatória (Aiven exige para deploy), se existir nas variáveis de ambiente
const sslConfig =
  process.env.USE_SSL === 'true'
    ? {
        ssl: {
          // 'rejectUnauthorized: false' libera a conexão com diferentes certificados.
          rejectUnauthorized: false,
        },
      }
    : {};

// Cria e exporta um pool de conexões com o banco de dados MySQL.
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT || 3306,
  // Espalha a configuração SSL APENAS se o USE_SSL for 'true'
  ...sslConfig,
});

// Função que testa a conexão com o banco antes de inicializar o servidor.
export async function testDatabaseConnection() {
  let connection; // Pega uma única conexão para teste.
  try {
    connection = await pool.getConnection(); // Pega a conexão.
  } catch (err) {
    console.error(err);
    process.exit(1); // Encerra a aplicação caso o teste falhe.
  } finally {
    if (connection) {
      connection.release(); // Libera a conexão.
    }
  }
}

export default pool;
