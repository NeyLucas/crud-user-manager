import isEmail from '../../node_modules/validator/lib/isEmail.js';

// Middleware para validar o corpo da requisição ao criar/atualizar um usuário.
export function validateUserBody(req, res, next) {
  const { body } = req;

  // Valida se o nome foi fornecido e é uma string.
  if (!body.name || typeof body.name !== 'string') {
    return res.status(400).json({ error: 'Nome é obrigatório' });
  }

  // Valida se o email foi fornecido e é uma string.
  if (!body.email || typeof body.email !== 'string') {
    return res.status(400).json({ error: 'Email é obrigatório' });
  }

  // Valida se a idade foi fornecida, é um número e não é negativa.
  if (body.age === undefined || typeof body.age !== 'number' || body.age < 0) {
    return res.status(400).json({ error: 'Idade faltando ou inválida' });
  }

  // Se a validação passar, chama o próximo middleware ou controller.
  next();
}

export function validateEmail(req, res, next) {
  const { email } = req.body;

  // Função para verificar no backend se o email da requisição é válido.
  if (!isEmail(email)) {
    return res.status(400).json({ error: 'Email digitado é inválido!' });
  }
  next();
}
