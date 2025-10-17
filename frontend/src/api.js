// URL base da API para todas as requisições relacionadas a usuários.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

export default {
  /**
   * Função assíncrona para retornar todos os usuários através do método GET.
   * @returns {object|Array<any>} Retorna um objeto com dados da API ou um Array vazio.
   */
  async getAllUsers() {
    const response = await fetch(API_BASE_URL);

    // Verifica se a resposta da requisição não foi bem-sucedida (ex: status 404 ou 500).
    await checkResponse(response);

    // Verifica se há dados na resposta.
    if (response.status === 204) return []; // 204 - No content

    return response.json();
  },

  /**
   * Função assíncrona para registrar um usuário através do método POST.
   * @param {object} newUser objeto que contem as informações do usuário.
   * @returns {object} Retorna um objeto com dados da API.
   */
  async createUser(newUser) {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    await checkResponse(response);
    return await response.json();
  },

  /**
   * Função assíncrona para atualizar um usuário através do método PUT
   * com o endpoint específico do usuário.
   * @param {object} updatedUser objeto que contem as informações do usuário.
   * @param {string} userId id do usuário no banco que foi salvo no dataset.user.
   */
  async updateUser(updatedUser, userId) {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    });

    await checkResponse(response);
  },

  /**
   * Função assíncrona para remover um usuário através do método DELETE
   * com o endpoint específico do usuário.
   * @param {string} userId id do usuário no banco que foi salvo no dataset.user.
   */
  async deleteUser(userId) {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: 'DELETE',
    });

    await checkResponse(response);
    return await response.json();
  },
};
