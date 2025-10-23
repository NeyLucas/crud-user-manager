import api from './api.js';
import * as validation from './validation.js';
import * as ui from './ui.js';

// Objeto para armazenar o estado original de uma linha que está sendo editada.
// A chave é o ID do usuário (vindo da API) e o valor é o seu HTML original.
let HTMLEditedRows = {};

export default {
  /**
   * Salva as alterações feitas em uma linha da tabela.
   * @param {HTMLButtonElement} button O botão "Salvar" que foi clicado.
   */
  async saveEdit(button) {
    // Encontra a linha (tr) que está sendo editada.
    const editedRow = button.closest('tr');
    const userId = editedRow.dataset.user; // Pega o ID do banco.

    // Coleta e formata os novos valores dos inputs dentro da linha.
    const inputs = editedRow.querySelectorAll('.form-input-edit');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const age = parseInt(inputs[2].value.trim(), 10);

    // Prepara o objeto para ser enviado no corpo da requisição.
    const updatedUser = { name, email, age };

    // Valida os novos dados.
    if (!validation.areInputsValid(updatedUser)) {
      return; // Interrompe a função se os dados forem inválidos.
    }

    // Deixa o botão vazio e exibe um spinner de carregamento.
    button.textContent = '';
    button.classList.add('loading-btn');

    try {
      // Chama a função correspondente que irá se comunicar comunicar com a API.
      await api.updateUser(updatedUser, userId);

      // Atualiza a UI construindo o HTML com os novos valores.
      editedRow.innerHTML = ui.buildRowContentHTML(updatedUser);

      // Limpa o backup da linha, pois a edição foi concluída.
      delete HTMLEditedRows[userId];
      alert('Dados do usuário atualizados com sucesso!');
    } catch (err) {
      alert(err.message);
      console.error(err);
    } finally {
      // Esconde o spinner e exibe o texto novamente.
      button.classList.remove('loading-btn');
      button.textContent = 'Adicionar Usuário';
    }
  },

  /**
   * Cancela a edição e restaura o conteúdo original da linha.
   * @param {HTMLButtonElement} button O botão "Voltar" que foi clicado.
   */
  cancelEdit(button) {
    const rowToBack = button.closest('tr');
    const keyDataUser = rowToBack.dataset.user; // Pega o identificador único da linha.

    // Restaura o HTML original que foi salvo no objeto HTMLEditedRows.
    const oldHTML = HTMLEditedRows[keyDataUser];
    rowToBack.innerHTML = oldHTML;

    // Remove a entrada do objeto de backup.
    delete HTMLEditedRows[keyDataUser];
  },

  /**
   * Remove um usuário do registro via API.
   * @param {HTMLButtonElement} button O botão "Excluir" que foi clicado.
   */
  async deleteUser(button) {
    const rowToDelete = button.closest('tr');
    const userId = rowToDelete.dataset.user;

    // Confirmação de exclusão para evitar erros por parte do usuário.
    if (confirm('Tem certeza que deseja excluir este usuário ?')) {
      button.textContent = '';
      button.classList.add('loading-btn');

      try {
        const success = await api.deleteUser(userId);
        rowToDelete.remove(); // Remove a linha selecionada.

        // Verifica se não existem mais usuários a serem visualizados e então
        // exibe a mensagem de tabela vazia
        if (success.totalRemaining === 0) {
          ui.showEmptyTableMessage();
        }

        alert(`Usuário com ID: ${userId} removido com sucesso!`);
      } catch (err) {
        alert(err.message);
        console.error(err);
      } finally {
        button.classList.remove('loading-btn');
        button.textContent = 'Adicionar Usuário';
      }
    }
  },

  /**
   * Habilita o modo de edição para uma linha específica da tabela.
   * @param {HTMLButtonElement} button O botão "Editar" que foi clicado.
   */
  editUser(button) {
    const rowToEdit = button.closest('tr');
    const keyDataUser = rowToEdit.dataset.user; // Identificador da linha.

    // Salva o HTML atual da linha antes de transformá-la em inputs.
    const valueHTML = rowToEdit.innerHTML;
    HTMLEditedRows[keyDataUser] = valueHTML;

    // Pega os valores atuais das células.
    const tableData = rowToEdit.querySelectorAll('td');
    const name = tableData[0].textContent;
    const email = tableData[1].textContent;
    const age = tableData[2].textContent;

    const userToUpdate = { name, email, age };

    // Substitui o conteúdo da linha por inputs preenchidos com os valores antigos.
    rowToEdit.innerHTML = ui.buildRowContentHTML(userToUpdate, true);
  },

  /**
   * Registra um novo usuário a partir do formulário enviado.
   * @param {Object} newUser objeto contendo as informações do usuário a ser adicionado.
   * @returns {boolean} retorna true se foi o usuário foi criado com sucesso.
   */
  async createUser(newUser, tableTBody) {
    if (!validation.areInputsValid(newUser)) {
      return;
    }
    try {
      // Extrai o retorno da API para usar na mensagem de sucesso.
      const user = await api.createUser(newUser);

      // Cria uma nova linha caso o usuário tenha sido criado;
      const newRow = document.createElement('tr');
      // Salva seu ID no dataset.
      newRow.dataset.user = user.userId;

      // Preenche a nova linha com o conteúdo HTML do novo usuário e adiciona à tabela.
      newRow.innerHTML = ui.buildRowContentHTML(newUser);
      tableTBody.appendChild(newRow);

      // Não exibe a mensagem de tabela vazia.
      ui.showEmptyTableMessage(false);

      alert(`Usuário com ID: ${user.userId} adicionado com sucesso!`);
      return true;
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  },
};
