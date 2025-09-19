import userService from '../services/userService.js';

export default {
    // Busca e retorna todos os usuários.
    async getAll(_req, res, next) {
        try {
            const users = await userService.listUsers();
            // Se não houver usuários, retorna status 204 (No Content).
            if (users.length === 0) {
                return res.status(204).send();
            }
            res.status(200).json(users);
        } catch (err) {
            // Delega o tratamento de erros para o middleware de erro.
            next(err);
        }
    },

    // Cria um novo usuário.
    async create(req, res, next) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch(err) {
            next(err);
        }
    },

    // Atualiza um usuário existente pelo ID.
    async update(req, res, next) {
        try {
            const success = await userService.updateUser(req.params.id, req.body);
            res.status(200).json(success);
        } catch(err) {
            next(err);
        }
    },

    // Deleta um usuário pelo ID.
    async delete(req, res, next) {
        try {
            const success = await userService.deleteUser(req.params.id);
            res.status(200).json(success);
        } catch(err) {
            next(err);
        }
    }
};