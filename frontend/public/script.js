// URL base da API para todas as requisições relacionadas a usuários.
const API_BASE_URL = 'http://localhost:8081/users';

// Seleciona os principais elementos do DOM com os quais vamos interagir.
const userForm = document.querySelector('#user-form');
const tableTBody = document.querySelector('#user-table tbody');
const userNameInput = document.querySelector('#user-name');
const userEmailInput = document.querySelector('#user-email');
const userAgeInput = document.querySelector('#user-age');

// Objeto para armazenar o estado original de uma linha que está sendo editada.
// A chave é o ID do usuário (vindo da API) e o valor é o seu HTML original.
let HTMLEditedRows = {};

/**
 * Constrói o HTML padrão para as células (td) de uma linha da tabela.
 * @param {string} name Nome do usuário.
 * @param {string} email Email do usuário.
 * @param {string} age Idade do usuário.
 * @returns {string} O HTML interno de uma linha (tr).
 */
function buildRowContentHTML(name, email, age) {
  return `
        <td class='name-td'>${name}</td>
        <td class='email-td'>${email}</td>
        <td class='age-td'>${age}</td>
        <td class='action-td'>
            <button class='action-btn edit-btn' onclick='enableToEditUser(this);'>Editar</button>
            <button class='action-btn delete-btn' onclick='deleteUser(this);'>Excluir</button>
        </td>
    `;
}

/**
 * Verifica a resposta de uma requisição fetch. Se a resposta não for 'ok',
 * lê a mensagem de erro da API e lança um erro, interrompendo a execução.
 * @param {Response} response O objeto de resposta da função fetch.
 */
async function checkResponse(response) {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Ocorreu um erro na API.');
  }
}

/**
 * Função assíncrona para buscar os usuários da API e renderizá-los na tabela.
 * Esta função será chamada quando a página carregar para popular a tabela inicialmente.
 */
async function renderUsers() {
  // O bloco try...catch é usado para lidar com possíveis erros na requisição (ex: API offline).
  try {
    // Faz uma requisição GET para a API e aguarda a resposta.
    const response = await fetch(API_BASE_URL);

    // Verifica se a resposta da requisição não foi bem-sucedida (ex: status 404 ou 500).
    await checkResponse(response);

    // Se a resposta foi bem-sucedida, converte o corpo da resposta para JSON.
    const users = await response.json();

    // Limpa o corpo da tabela para evitar duplicar dados ao renderizar novamente.
    tableTBody.innerHTML = '';

    // Itera sobre cada usuário recebido da API.
    users.forEach((user) => {
      // Cria um novo elemento de linha (tr) para cada usuário.
      const newRow = document.createElement('tr');
      // Define um 'data-attribute' na linha com o ID do usuário. Isso é crucial para as operações de update e delete.
      newRow.dataset.user = user.id;
      // Constrói o HTML interno da linha com os dados do usuário.
      newRow.innerHTML = buildRowContentHTML(user.name, user.email, user.age);
      // Adiciona a nova linha ao corpo da tabela.
      tableTBody.appendChild(newRow);
    });
  } catch (err) {
    // Se ocorrer qualquer erro no bloco 'try', ele será capturado aqui.
    // Exibe um alerta para o usuário com a mensagem de erro.
    alert(err.message);
    // Loga o erro completo no console para fins de depuração.
    console.error(err);
  }
}

/**
 * Valida se o formato do email é válido usando a biblioteca validator.js.
 * @param {string} email O email a ser validado.
 * @returns {boolean} Retorna true se o email for inválido.
 */
function checkInvalidEmail(email) {
  if (!validator.isEmail(email)) {
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
    // Envia uma requisição PUT com os dados a serem atualizados
    // para o endpoint específico do usuário.
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: 'PUT', // Especifica o método HTTP para criação.
      headers: { 'Content-Type': 'application/json' }, // Informa à API que o corpo é JSON.
      body: JSON.stringify(updatedUser), // Converte o objeto JS em uma string JSON.
    });

    // Se a API retornar um erro (ex: email já existe), lança uma exceção.
    await checkResponse(response);

    // Recarrega os dados da tabela a partir da API para garantir que a UI
    // esteja perfeitamente sincronizada com o banco de dados.
    renderUsers();

    // Limpa o backup da linha, pois a edição foi concluída.
    delete HTMLEditedRows[userId];

    alert('Dados do usuário atualizados com sucesso!');
  } catch (err) {
    // Exibe erros de rede ou da API para o usuário.
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
      // Faz uma requisição DELETE para o endpoint específico do usuário.
      const response = await fetch(`${API_BASE_URL}/${userId}`, {
        method: 'DELETE',
      });

      await checkResponse(response);

      renderUsers();
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
            <button class='action-btn save-btn' onclick='saveEdit(this);'>Salvar</button>
            <button class='action-btn back-btn' onclick='backRow(this);'>Voltar</button>
        </td>
    `;
}

/**
 * Lida com o envio do formulário, agora enviando os dados para a API via POST.
 * @param {Event} e O evento de submit do formulário.
 */
async function handleUserSubmit(e) {
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
    // Faz uma requisição POST com os dados a serem adicionados.
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    await checkResponse(response);

    // Extrai o retorno da API para usar na mensagem de sucesso.
    const user = await response.json();

    // Limpa o formulário após o sucesso.
    userForm.reset();

    // Foca no input de nome para fins de UX mais adequada.
    userNameInput.focus();

    renderUsers();

    alert(`Usuário com ID: ${user.insertId} adicionado com sucesso!`);
  } catch (err) {
    alert(err.message);
    console.error(err);
  }
}

// Adiciona um ouvinte de eventos quando a página é carregada ou o formulário é enviado.
document.addEventListener('DOMContentLoaded', renderUsers);
userForm.addEventListener('submit', handleUserSubmit);
