// Middleware para tratamento centralizado de erros.
export function userHandler(err, _req, res, _next) {
  // Loga o erro no console para fins de debug.
  console.error(err);

  // Define um status code padrão ou usa o que foi definido no erro.
  const status = err.statusCode || 500;
  const message = err.message || 'Erro interno no servidor.';

  // Retorna uma resposta de erro padronizada em JSON.
  res.status(status).json({ error: message });
}
