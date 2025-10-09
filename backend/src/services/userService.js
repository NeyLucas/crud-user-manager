import userRepository from '../repositories/userRepository.js';

export default {
  // Função auxiliar para verificar se o usuário a ser atualizado/deletado realmente existe.
  async _checkUserExistsById(id) {
    const idExists = await userRepository.findById(id);
    if (!idExists) {
      const err = new Error(`Não existe cadastro com ID: ${id}`);
      err.statusCode = 404; // Not Found
      throw err;
    }
  },

  // Função auxilixar para verificar se email já foi cadastrado.
  async _checkEmailIsAvaliable(email, currentUserId = null) {
    const emailExists = await userRepository.findByEmail(email);
    currentUserId = parseInt(currentUserId, 10);
    // Se id for nulo, o objetivo é a criação de um novo usuário com email repetido.
    // Se id do usuario cujo o email foi retornado for diferente do id enviado nos params,
    // o usuario não poderá atualizar, pois é de outro usuário.
    if (
      emailExists &&
      (currentUserId === null || emailExists.id !== currentUserId)
    ) {
      const err = new Error('Email já cadastrado!');
      err.statusCode = 409; // Conflict
      throw err;
    }
  },

  // Lista todos os usuários.
  async listUsers() {
    const users = await userRepository.findAll();
    return users;
  },

  // Cria um novo usuário, aplicando regras de negócio.
  async createUser(user) {
    // Regra: não permitir criar usuários com emails duplicados.
    await this._checkEmailIsAvaliable(user.email);

    const userId = await userRepository.create(user);
    return { userId };
  },

  // Atualiza um usuário.
  async updateUser(id, user) {
    await this._checkEmailIsAvaliable(user.email, id);

    // Regra: verificar se o usuário realmente existe.
    await this._checkUserExistsById(id);

    const userUpdated = await userRepository.update(id, user);
    return userUpdated;
  },

  // Deleta um usuário.
  async deleteUser(id) {
    await this._checkUserExistsById(id);

    const deletedUser = await userRepository.delete(id);
    return deletedUser;
  },
};
