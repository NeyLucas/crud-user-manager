export const logger = (req, _res, next) => {
  // Retira o metodo e a ulr da requisição.
  const { method, url } = req;

  // Converte a data para o padrão ISO.
  const timestamp = new Date().toISOString();

  // Loga para fins de debug.
  console.log(`\n[logger] [${timestamp}] ${method} ${url}`);

  // Passa para o próximo middleware.
  next();
};
