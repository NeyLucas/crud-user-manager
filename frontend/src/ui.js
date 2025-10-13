import api from './api.js';

/**
 * Constrói o HTML padrão para as células (td) de uma linha da tabela.
 * @param {string} name Nome do usuário.
 * @param {string} email Email do usuário.
 * @param {string} age Idade do usuário.
 * @returns {string} O HTML interno de uma linha (tr).
 */
export function buildRowContentHTML({ name, email, age }) {
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
