import isEmail from '../../../node_modules/validator/lib/isEmail.js';

// Middleware para validar o corpo da requisição ao criar/atualizar um usuário.
export function validateUserBody(req, res, next) {
  const { name, email, age } = req.body;

  // Define um limite de caracteres para os campos de texto.
  const MAX_LENGTH = 100;

  // Valida se o nome foi fornecido e é uma string.
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Nome é obrigatório!' });
  }

  // Valida se o campo de nome é muitp longo.
  if (name.length > MAX_LENGTH) {
    return res
      .status(400)
      .json({ error: `Nome muito longo (máx ${MAX_LENGTH} caracteres)!` });
  }

  // Valida se o email foi fornecido e é uma string.
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email é obrigatório!' });
  }

  // Valida se a idade foi fornecida, é um número e não é negativa.
  if (age === undefined || typeof age !== 'number' || age <= 0 || age > 150) {
    return res.status(400).json({ error: 'Idade faltando ou inválida!' });
  }

  // Se a validação passar, chama o próximo middleware ou controller.
  next();
}

export function validateEmail(req, res, next) {
  const { email } = req.body;

  // Função para verificar no backend se o email da requisição é válido.
  if (!isEmail(email)) {
    return res
      .status(400)
      .json({ error: 'Por favor, digite um e-mail válido.' });
  }

  next();
}
