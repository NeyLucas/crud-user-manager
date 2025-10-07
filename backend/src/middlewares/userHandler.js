// Middleware para tratamento centralizado de erros.
export function userHandler(err, _req, res, _next) {
  // Loga o erro no console para fins de debug.
  console.error(err);

  // Define um status code padrão ou usa o que foi definido no erro.
  const status = err.statusCode || 500;

  // Define uma mensagem de acordo com o status do erro.
  // Uma mensagem padrão é enviada caso um erro inesperado do servidor(500) ocorra
  // para evitar uma stack trace do banco de dados.
  const message = status === 500 ? 'Erro interno no servidor.' : err.message;

  // Retorna uma resposta de erro padronizada em JSON.
  res.status(status).json({ error: message });
}
