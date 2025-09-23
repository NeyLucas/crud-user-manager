// --- START OF FILE script.js ---

// Seleciona os principais elementos do DOM com os quais vamos interagir.
const userForm = document.querySelector('#user-form');
const tableTBody = document.querySelector('#user-table tbody');
const userNameInput = document.querySelector('#user-name');
const userEmailInput = document.querySelector('#user-email');
const userAgeInput = document.querySelector('#user-age');

// Objeto para armazenar o estado original de uma linha que está sendo editada.
// A chave é o data-attribute da linha e o valor é o seu HTML original.
let HTMLEditedRows = {};

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
function saveEdit(button) {
  // Encontra a linha (tr) que está sendo editada.
  const editedRow = button.closest('tr');

  // Pega os novos valores dos inputs dentro da linha.
  const inputs = editedRow.querySelectorAll('.form-input-edit');
  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const age = inputs[2].value.trim();

  // Valida os novos dados.
  const inputsAreInvalid =
    checkEmptyInputs(name, email, age) || checkInvalidEmail(email);

  if (inputsAreInvalid) {
    return; // Interrompe a função se os dados forem inválidos.
  }

  // Se os dados forem válidos, reconstrói o HTML da linha com os novos valores.
  editedRow.innerHTML = buildRowContentHTML(name, email, age);
  // Limpa o backup da linha, pois a edição foi concluída.
  delete HTMLEditedRows[editedRow.dataset.user];
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
 * Remove uma linha da tabela.
 * @param {HTMLButtonElement} button O botão "Excluir" que foi clicado.
 */
function deleteUser(button) {
  const rowToDelete = button.closest('tr');
  rowToDelete.remove();
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
 * Função principal que lida com o envio do formulário para adicionar um novo usuário.
 * @param {Event} e O evento de submit do formulário.
 */
function enableToAddUserToTable(e) {
  // Impede o comportamento padrão do formulário, que é recarregar a página.
  e.preventDefault();

  // Pega os valores dos inputs e remove espaços em branco extras.
  const name = userNameInput.value.trim();
  const email = userEmailInput.value.trim();
  const age = userAgeInput.value.trim();

  // Valida os dados do formulário.
  const inputsAreInvalid =
    checkEmptyInputs(name, email, age) || checkInvalidEmail(email);

  if (inputsAreInvalid) {
    return; // Interrompe se a validação falhar.
  }

  // Cria uma nova linha na tabela.
  const newRow = document.createElement('tr');
  // Atribui um ID único à linha para ajudar no controle de edição.
  newRow.dataset.user = crypto.randomUUID();

  // Constrói e insere o HTML na nova linha.
  newRow.innerHTML = buildRowContentHTML(name, email, age);

  // Adiciona a nova linha ao corpo da tabela.
  tableTBody.appendChild(newRow);

  // Limpa o formulário e coloca o foco de volta no campo de nome para facilitar novos cadastros.
  userForm.reset();
  userNameInput.focus();
}

// Adiciona um "ouvinte de evento" ao formulário que aciona a função enableToAddUserToTable quando o formulário é enviado.
userForm.addEventListener('submit', enableToAddUserToTable);
