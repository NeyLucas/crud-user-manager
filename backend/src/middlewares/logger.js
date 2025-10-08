// Middleware para logar no console os detalhes de cada requisição recebida pela API.
export const logger = (req, _res, next) => {
  const { method, url } = req;

  const timestamp = new Date().toISOString();

  // Loga para fins de debug.
  console.log(`\n[logger] [${timestamp}] ${method} ${url}`);

  // Passa para o próximo middleware.
  next();
};
