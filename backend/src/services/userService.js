import userRepository from '../repositories/userRepository.js';

export default {
    // Lista todos os usuários.
    async listUsers() {
        const users = await userRepository.findAll();
        return users;
    },

    // Cria um novo usuário, aplicando regras de negócio.
    async createUser(user) {
        // Regra: não permitir criar usuários com emails duplicados.
        const emailExists = await userRepository.findByEmail(user.email);
        if (emailExists) {
            const err = new Error('Email já cadastrado!');
            err.statusCode = 409; // Conflict
            throw err;
        }

        const userId = await userRepository.create(user);
        return { userId };
    },

    // Atualiza um usuário.
    async updateUser(id, user) {
        // Regra: verificar se o usuário a ser atualizado realmente existe.
        const idExists = await userRepository.findById(id);
        if (!idExists) {
            const err = new Error(`Não existe cadastro com ID: ${id}`);
            err.statusCode = 404; // Not Found
            throw err;
        }

        const userUpdated = await userRepository.update(id, user);
        return userUpdated;
    },

    // Deleta um usuário.
    async deleteUser(id) {
        // Regra: verificar se o usuário a ser deletado realmente existe.
        const idExists = await userRepository.findById(id);
        if (!idExists) {
            const err = new Error(`Não existe cadastro com ID: ${id}`);
            err.statusCode = 404; // Not Found
            throw err;
        }

        const deletedUser = await userRepository.delete(id);
        return deletedUser;
    }
};