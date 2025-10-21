/**
 * Valida se o formato do email é válido usando regex.
 * @param {string} email O email a ser validado.
 * @returns {boolean} Retorna true se o email for inválido.
 */
function isEmailValid(email) {
  // Regex padrão: verifica se há um @ e pelo menos um . após ele.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailFormatValid = emailRegex.test(email);
  if (!isEmailFormatValid) {
    alert('Por favor, digite um e-mail válido.');
    return false;
  }
  return true;
}

/**
 * Verifica se algum dos campos do formulário está vazio.
 * @param {string} name O nome do usuário.
 * @param {string} email O email do usuário.
 * @param {string} age A idade do usuário.
 * @returns {boolean} Retorna true se algum campo estiver vazio.
 */
function areInputsFilled(name, email, age) {
  if (!name || !email || !age) {
    alert('Por favor, preencha todos os campos.');
    return false;
  }
  return true;
}

/**
 * Verifica a validade dos dados de entrada (nome, email, idade) antes de processá-los.
 * É uma verificação de duas etapas:
 * 1. Todos os campos estão preenchidos, e 2. O formato do email é válido.
 * @param {object} user - Objeto contendo os dados de entrada do formulário.
 * @param {string} user.name - O nome a ser validado.
 * @param {string} user.email - O email a ser validado.
 * @param {string} user.age - A idade a ser validada.
 * @returns {boolean} Retorna true se todos os campos estiverem preenchidos E o email for válido; caso contrário, false.
 */
export function areInputsValid({ name, email, age }) {
  return areInputsFilled(name, email, age) && isEmailValid(email);
}
