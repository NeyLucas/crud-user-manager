import api from './api.js';

function toogleEmptyState(isEmpty = true) {
  const tableContainer = document.querySelector('.table-container');
  const table = document.querySelector('#user-table');

  const emptyTextDiv = document.createElement('div');

  table.setAttribute('hidden', 'true');
  emptyTextDiv.innerHTML =
    '<p id="empty-paragraph">Insira Usuários Na tabela</p>';
  tableContainer.appendChild(emptyTextDiv);
}

/**
 * Constrói o HTML padrão para as células (td) de uma linha da tabela.
 *
 * A função renderiza a linha em modo de visualização (default) ou em modo de edição (com campos de input).
 * Essa abordagem é eficiente e prática para manipular o DOM diretamente no front-end.
 *
 * @param {Object} user - Objeto contendo os dados do usuário para a linha.
 * @param {string} user.name - Nome do usuário.
 * @param {string} user.email - Email do usuário.
 * @param {string} user.age - Idade do usuário.
 * @param {boolean} [isEditing=false] - Flag opcional para determinar se a linha deve ser renderizada em modo de edição (com inputs e botões Salvar/Voltar).
 * @returns {string} O HTML interno de uma linha (tr) pronto para ser injetado no DOM.
 */
export function buildRowContentHTML({ name, email, age }, isEditing = false) {
  if (isEditing) {
    return `
          <td class='name-td'><input type='text' placeholder='Nome' class='form-input-edit name-ipt-edit' value='${name}'></td>
          <td class='email-td'><input type='email' placeholder='Email' class='form-input-edit email-ipt-edit' value='${email}'></td>
          <td class='age-td'><input type='number' min='1' max='150' placeholder='Idade' class='form-input-edit age-ipt-edit' value='${age}'></td>
          <td class='action-td'>
              <button class='action-btn save-btn'>Salvar</button>
              <button class='action-btn back-btn'>Voltar</button>
          </td>
      `;
  }

  return `
      <td class='name-td'>${name}</td>
      <td class='email-td'>${email}</td>
      <td class='age-td'>${age}</td>
      <td class='action-td'>
          <button class='action-btn edit-btn'>Editar</button>
          <button class='action-btn delete-btn'>Excluir</button>
      </td>
    `;
}

/**
 * Função que recebe e renderiza usuários vindos da API.
 * Esta função será chamada quando a página carregar para popular a tabela inicialmente.
 */
export async function renderUsers(tableTBody) {
  // Recebe todos os usuários vindos da API.
  const users = await api.getAllUsers();

  if (users.length === 0) {
    toogleEmptyState();
    return;
  }
  // Limpa o corpo da tabela para evitar duplicar dados ao renderizar novamente.
  tableTBody.innerHTML = '';

  users.forEach((user) => {
    const newRow = document.createElement('tr');
    // Define um 'data-attribute' na linha com o ID do usuário.
    // Isso é crucial para as operações de update e delete.
    newRow.dataset.user = user.id;

    const newUser = { name: user.name, email: user.email, age: user.age };

    // Constrói o HTML interno da linha com os dados do usuário.
    newRow.innerHTML = buildRowContentHTML(newUser);
    // Adiciona a nova linha ao corpo da tabela.
    tableTBody.appendChild(newRow);
  });
}
