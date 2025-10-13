import { isEmail } from 'validator';

/**
 * Valida se o formato do email é válido usando a biblioteca validator.
 * @param {string} email O email a ser validado.
 * @returns {boolean} Retorna true se o email for inválido.
 */
function isEmailValid(email) {
  if (!isEmail(email)) {
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

export function areInputsValid({ name, email, age }) {
  return areInputsFilled(name, email, age) && isEmailValid(email);
}
