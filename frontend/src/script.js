import { isEmail } from 'validator';
import api from './api.js';
import * as ui from './ui.js';

// Seleciona os principais elementos do DOM com os quais vamos interagir.
const userForm = document.querySelector('#user-form');
const tableTBody = document.querySelector('#user-table tbody');
const userNameInput = document.querySelector('#user-name');
const userEmailInput = document.querySelector('#user-email');
const userAgeInput = document.querySelector('#user-age');

// Objeto para armazenar o estado original de uma linha que está sendo editada.
// A chave é o ID do usuário (vindo da API) e o valor é o seu HTML original.
let HTMLEditedRows = {};

// TODO - transferir essas checagens para o módulo validation.js
/**
 * Valida se o formato do email é válido usando a biblioteca validator.
 * @param {string} email O email a ser validado.
 * @returns {boolean} Retorna true se o email for inválido.
 */
function checkInvalidEmail(email) {
  if (!isEmail(email)) {
    alert('Por favor, digite um e-mail válido.');
    return true;
  }
  return false;
}

/**
 * Verifica se algum dos campos do formulário está vazio.
 * @param {string} name O nome do usuário.
 * @param {string} email O email do usuário.
 * @param {string} age A idade do usuário.
 * @returns {boolean} Retorna true se algum campo estiver vazio.
 */
function checkEmptyInputs(name, email, age) {
  if (!name || !email || !age) {
    alert('Por favor, preencha todos os campos.');
    return true;
  }
  return false;
}

/**
 * Salva as alterações feitas em uma linha da tabela.
 * @param {HTMLButtonElement} button O botão "Salvar" que foi clicado.
 */
async function saveEdit(button) {
  // Encontra a linha (tr) que está sendo editada.
  const editedRow = button.closest('tr');
  const userId = editedRow.dataset.user; // Pega o ID do banco.

  // Coleta e formata os novos valores dos inputs dentro da linha.
  const inputs = editedRow.querySelectorAll('.form-input-edit');
  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const age = parseInt(inputs[2].value.trim(), 10);

  // Valida os novos dados.
  const inputsAreInvalid =
    checkEmptyInputs(name, email, age) || checkInvalidEmail(email);

  if (inputsAreInvalid) {
    return; // Interrompe a função se os dados forem inválidos.
  }

  // Prepara o objeto para ser enviado no corpo da requisição.
  const updatedUser = { name, email, age };

  try {
    // Chama a função correspondente que irá se comunicar comunicar com a API.
    await api.updateUser(updatedUser, userId);

    // Recarrega os dados da tabela a partir da API para garantir que a UI
    // esteja perfeitamente sincronizada com o banco de dados.
    ui.renderUsers(tableTBody);

    // Limpa o backup da linha, pois a edição foi concluída.
    delete HTMLEditedRows[userId];

    alert('Dados do usuário atualizados com sucesso!');
  } catch (err) {
    alert(err.message);
    console.error(err);
  }
}

/**
 * Cancela a edição e restaura o conteúdo original da linha.
 * @param {HTMLButtonElement} button O botão "Voltar" que foi clicado.
 */
function backRow(button) {
  const rowToBack = button.closest('tr');
  const keyDataUser = rowToBack.dataset.user; // Pega o identificador único da linha.

  // Restaura o HTML original que foi salvo no objeto HTMLEditedRows.
  const oldHTML = HTMLEditedRows[keyDataUser];
  rowToBack.innerHTML = oldHTML;

  // Remove a entrada do objeto de backup.
  delete HTMLEditedRows[keyDataUser];
}

/**
 * Remove um usuário do registro via API.
 * @param {HTMLButtonElement} button O botão "Excluir" que foi clicado.
 */
async function deleteUser(button) {
  const rowToDelete = button.closest('tr');
  const userId = rowToDelete.dataset.user;

  // Confirmação de exclusão para evitar erros por parte do usuário.
  if (confirm('Tem certeza que deseja excluir este usuário ?')) {
    try {
      await api.deleteUser(userId);
      ui.renderUsers(tableTBody);
      alert(`Usuário com ID: ${userId} removido com sucesso!`);
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  }
}

/**
 * Habilita o modo de edição para uma linha específica da tabela.
 * @param {HTMLButtonElement} button O botão "Editar" que foi clicado.
 */
function enableToEditUser(button) {
  const rowToEdit = button.closest('tr');
  const keyDataUser = rowToEdit.dataset.user; // Identificador da linha.

  // Salva o HTML atual da linha antes de transformá-la em inputs.
  const valueHTML = rowToEdit.innerHTML;
  HTMLEditedRows[keyDataUser] = valueHTML;

  // Pega os valores atuais das células.
  const tableData = rowToEdit.querySelectorAll('td');
  const oldNameValue = tableData[0].textContent;
  const oldEmailValue = tableData[1].textContent;
  const oldAgeValue = tableData[2].textContent;

  // Substitui o conteúdo da linha por inputs preenchidos com os valores antigos.
  rowToEdit.innerHTML = `
        <td class='name-td'><input type='text' placeholder='Nome' class='form-input-edit name-ipt-edit' value='${oldNameValue}'></td>
        <td class='email-td'><input type='email' placeholder='Email' class='form-input-edit email-ipt-edit' value='${oldEmailValue}'></td>
        <td class='age-td'><input type='number' min='1' max='150' placeholder='Idade' class='form-input-edit age-ipt-edit' value='${oldAgeValue}'></td>
        <td class='action-td'>
            <button class='action-btn save-btn'>Salvar</button>
            <button class='action-btn back-btn'>Voltar</button>
        </td>
    `;
}

/**
 * Lida com o envio do formulário, agora enviando os dados para a API via POST.
 * @param {Event} e O evento de submit do formulário.
 */
async function submitForm(e) {
  e.preventDefault();

  // Coleta e formata os dados do formulário.
  const name = userNameInput.value.trim();
  const email = userEmailInput.value.trim();
  const age = parseInt(userAgeInput.value.trim(), 10);

  const inputsAreInvalid =
    checkEmptyInputs(name, email, age) || checkInvalidEmail(email);

  if (inputsAreInvalid) {
    return;
  }

  const newUser = { name, email, age };

  try {
    // Extrai o retorno da API para usar na mensagem de sucesso.
    const user = await api.createUser(newUser);
    ui.renderUsers(tableTBody);

    // Limpa o formulário após o sucesso e alerta o usuário.
    userForm.reset();
    alert(`Usuário com ID: ${user.userId} adicionado com sucesso!`);
  } catch (err) {
    alert(err.message);
    console.error(err);
  }

  // Foca no input de nome para fins de UX mais adequada.
  userNameInput.focus();
}

// 'escutador' de eventos que irá capturar o botão de ação clicado pelo usuário.
tableTBody.addEventListener('click', (event) => {
  // Grava o botão clicado.
  const target = event.target;

  // Verifica as condições se o botão clicado é algum dos que pertencem a essas classes.
  if (target.matches('.edit-btn')) {
    // Chama a função que executa a ação do respectivo botão.
    enableToEditUser(target);
  }
  if (target.matches('.delete-btn')) {
    deleteUser(target);
  }
  if (target.matches('.save-btn')) {
    saveEdit(target);
  }
  if (target.matches('.back-btn')) {
    backRow(target);
  }
});

// Adiciona um ouvinte de eventos quando a página é carregada ou o formulário é enviado.
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await ui.renderUsers(tableTBody);
  } catch (err) {
    alert(err.message);
    console.error(err);
  }
});

userForm.addEventListener('submit', submitForm);
