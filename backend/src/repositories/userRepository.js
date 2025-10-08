import pool from '../config/db.js';
import User from '../models/User.js';

export default {
  // Busca todos os usuários no banco de dados.
  async findAll() {
    let connection; // Pega uma única conexão para a operação.
    try {
      connection = await pool.getConnection(); // Pega a conexão.
      const [rows] = await connection.execute('SELECT * FROM users');

      // Mapeia os resultados para instâncias da classe User.
      return rows.map(
        (row) =>
          new User(row.user_id, row.user_name, row.user_email, row.user_age),
      );
    } finally {
      if (connection) {
        connection.release(); // Libera a conexão.
      }
    }
  },

  // Busca um usuário específico pelo ID.
  async findById(id) {
    let connection;
    try {
      connection = await pool.getConnection();
      const [rows] = await connection.execute(
        'SELECT * FROM users WHERE user_id = ?',
        [id],
      );

      // Verifica se algo foi retornado.
      if (rows.length === 0) {
        return null;
      }

      const { user_name, user_email, user_age } = rows[0];
      return new User(id, user_name, user_email, user_age);
    } finally {
      if (connection) {
        connection.release();
      }
    }
  },

  // Busca um usuário específico pelo email.
  async findByEmail(email) {
    let connection;
    try {
      connection = await pool.getConnection();
      const [rows] = await connection.execute(
        'SELECT * FROM users WHERE user_email = ?',
        [email],
      );

      if (rows.length === 0) {
        return null;
      }

      const { user_id, user_name, user_age } = rows[0];
      return new User(user_id, user_name, email, user_age);
    } finally {
      if (connection) {
        connection.release();
      }
    }
  },

  // Insere um novo usuário no banco de dados.
  async create({ name, email, age }) {
    let connection;
    try {
      connection = await pool.getConnection();
      const [result] = await connection.execute(
        'INSERT INTO users(user_name, user_email, user_age) VALUES (?, ?, ?)',
        [name, email, age],
      );

      return result.insertId;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  },

  // Atualiza os dados de um usuário existente.
  async update(id, { name, email, age }) {
    let connection;
    try {
      connection = await pool.getConnection();
      const [result] = await pool.execute(
        'UPDATE users SET user_name = ?, user_email = ?, user_age = ? WHERE user_id = ?',
        [name, email, age, id],
      );

      return { success: true, affectedRows: result.affectedRows };
    } finally {
      if (connection) {
        connection.release();
      }
    }
  },

  // Deleta um usuário do banco de dados pelo ID.
  async delete(id) {
    let connection;
    try {
      connection = await pool.getConnection();
      const [result] = await pool.execute(
        'DELETE FROM users WHERE user_id = ?',
        [id],
      );

      return { success: true, affectedRows: result.affectedRows };
    } finally {
      if (connection) {
        connection.release();
      }
    }
  },
};
