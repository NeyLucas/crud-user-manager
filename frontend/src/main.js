import buttonActions from './buttonActions.js';
import * as ui from './ui.js';

// Seleciona os principais elementos do DOM com os quais vamos interagir.
const userForm = document.querySelector('#user-form');
const tableTBody = document.querySelector('#user-table tbody');
const userNameInput = document.querySelector('#user-name');
const userEmailInput = document.querySelector('#user-email');
const userAgeInput = document.querySelector('#user-age');
const hamburguerMenu = document.querySelector('#hamburguer-menu');
const sidebar = document.querySelector('#sidebar');

/**
 * Lida com o envio do formulário.
 * @param {Event} event O evento de submit do formulário.
 */
async function submitForm(event) {
  event.preventDefault();

  // Coleta e formata os dados do formulário.
  const name = userNameInput.value.trim();
  const email = userEmailInput.value.trim();
  const age = parseInt(userAgeInput.value.trim(), 10);

  // Prepara o objeto para ser enviado no corpo da requisição.
  const newUser = { name, email, age };

  const isUserCreated = await buttonActions.createUser(newUser, tableTBody);

  if (isUserCreated) {
    // Limpa o formulário após o sucesso e alerta o usuário.
    userForm.reset();
    // Foca no input de nome para fins de UX mais adequada.
    userNameInput.focus();
  }
}

// 'Escutador' de eventos que irá capturar o botão de ação clicado pelo usuário.
tableTBody.addEventListener('click', (event) => {
  // Grava o botão clicado.
  const target = event.target;

  // Verifica as condições se o botão clicado é algum dos que pertencem a essas classes.
  if (target.matches('.edit-btn')) {
    // Chama a função que executa a ação do respectivo botão.
    buttonActions.editUser(target);
  }
  if (target.matches('.delete-btn')) {
    buttonActions.deleteUser(target);
  }
  if (target.matches('.save-btn')) {
    buttonActions.saveEdit(target);
  }
  if (target.matches('.back-btn')) {
    buttonActions.cancelEdit(target);
  }
});

// Adiciona um ouvinte de eventos quando a página é carregada.
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await ui.renderUsers(tableTBody);
  } catch (err) {
    alert(err.message);
    console.error(err);
  }
});

// Adiciona o evento de envio do formulário, chamando a função submitForm.
userForm.addEventListener('submit', submitForm);

// Adiciona o evento de clique no menu hambúrguer.
hamburguerMenu.addEventListener('click', () => {
  // Alterna a classe "open" na sidebar, abrindo ou fechando o menu lateral.
  sidebar.classList.toggle('open');

  // Alterna a classe "active" no ícone do menu, mudando sua aparência ao clicar.
  hamburguerMenu.classList.toggle('active');
});
