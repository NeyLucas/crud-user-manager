<div align="center">

# CRUD Simples - Cadastro de Usuários

<p>
  <img src="https://img.shields.io/badge/status-Em%20desenvolvimento-brown" alt="Badge de Status do Projeto">
  <img src="https://img.shields.io/badge/licença-MIT-blue" alt="Badge da Licença">
  <a href="https://www.linkedin.com/in/ney-lucas-a72b89353/">
    <img src="https://img.shields.io/badge/LinkedIn-Ney%20Lucas-blue?style=flat&logo=linkedin" alt="Meu Perfil no LinkedIn">
  </a>
</p>

<p>
  Um projeto Full-Stack que implementa as quatro operações básicas de um CRUD (Create, Read, Update, Delete) para gerenciar um cadastro de usuários. A aplicação é construída com uma arquitetura de monorepo, separando claramente o <code>backend</code> e o <code>frontend</code>.
</p>
</div>

---

## 🎨 Visão Geral do Projeto

O objetivo deste projeto é demonstrar a construção de uma aplicação web completa, desde a API REST no backend até a interface reativa no frontend.

Esta é a **v1.0** do projeto, focada em estabelecer uma base sólida com um frontend estático (HTML, CSS e JavaScript puro). Uma **v2.0**, com tecnologias mais modernas e funcionalidades avançadas, já está planejada.

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

## ✨ Funcionalidades Principais (v1.0)

- **Criação de Usuários:** Formulário para adicionar novos usuários ao banco de dados.
- **Leitura e Listagem:** Tabela que exibe todos os usuários cadastrados em tempo real.
- **Atualização de Usuários:** Edição dos dados de um usuário diretamente na tabela.
- **Exclusão de Usuários:** Remoção de usuários do sistema com uma etapa de confirmação.
- **Validação de Dados:** Validações no backend para garantir a integridade dos dados e no frontend para feedback rápido ao usuário.
- **Middleware de Segurança:** Uso de CORS para permitir requisições apenas de origens confiáveis.
- **Tratamento de Erros Centralizado:** Um middleware no backend lida com todos os erros da aplicação de forma consistente.

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

## 🗺️ Roadmap do Projeto

Esta seção detalha os próximos passos para a finalização da versão atual e os planos para a futura v2.0.

### 🎯 v1.0 - Tarefas Restantes

- [x] Criar README.
- [x] Modularizar o código JavaScript do frontend.
- [x] Adicionar texto indicativo quando a tabela de usuários estiver vazia.
- [ ] Adicionar uma sidebar de navegação.
- [ ] Criar uma imagem Docker para a aplicação.
- [ ] Fazer o deploy do backend no Render.
- [ ] Fazer o deploy do frontend na Vercel.

### 🚀 v2.0 - Próximas Grandes Features

A versão 2.0 será uma reescrita completa, focada em modernizar a stack e adicionar funcionalidades avançadas para uma melhor experiência de usuário.

- **Frontend:**
  - Framework: Migração para **React**.
  - Estilização: Utilização de **Tailwind CSS**.
- **Backend:**
  - Banco de Dados: Migração do MySQL para **PostgreSQL**.
  - ORM: Adoção do **Prisma** para a camada de acesso a dados.
- **Qualidade de Código:**
  - Implementação de **testes unitários** com **Jest**.
- **Novas Funcionalidades:**
  - **UI Reformulada:** Uma interface de usuário mais moderna e intuitiva.
  - **Busca Inteligente:** Campo de busca com _debounce_ para evitar requisições excessivas.
  - **Filtros Avançados:** Filtrar usuários por e-mail e data de criação.
  - **Paginação:** Para lidar com grandes volumes de dados de forma eficiente.
  - **Modo Dark:** Tema escuro para conforto visual.
  - **Responsividade:** Layout adaptável para dispositivos móveis.
  - **Notificações (Toast):** Feedback visual para operações de sucesso e erro.

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

<div align="center">

## 🛠️ Tecnologias Utilizadas (v1.0)

</div>

<div align="center">

### **Backend**

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.JS">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.JS">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

### **Frontend**

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</p>

### **Ferramentas de Desenvolvimento (DevTools)**

<p>
  <img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier">
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" alt="Nodemon">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
</p>
</div>

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

## 🚀 Como Executar o Projeto

Para executar este projeto em seu ambiente local, siga os passos abaixo. Você precisará ter o [Node.js](https://nodejs.org/) e o [NPM](https://www.npmjs.com/) instalados. O uso do [Docker](https://www.docker.com/products/docker-desktop/) é **altamente recomendado** para uma configuração mais simples e consistente.

### 1. Clonar o Repositório

```bash
git clone https://github.com/NeyLucas/crud-user-manager.git
cd crud-simples-cadastro
```

### 2. Instalar as Dependências

Este projeto utiliza workspaces do NPM. Instale todas as dependências a partir da raiz do projeto:

```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente

Copie os arquivos de exemplo `.env.example` ou crie os arquivos `.env` manualmente nas pastas `/backend` e `/frontend` com o conteúdo abaixo.

#### Backend (`/backend/.env`)

```env
# Porta da API
PORT=8081

# Origens permitidas pelo CORS
CORS_ORIGIN_WHITELIST=http://localhost:5173

# Credenciais do banco de dados (padrão para o Docker Compose)
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DB=cadastro_usuarios
```

#### Frontend (`/frontend/.env`)

```env
# URL base para acessar a API
VITE_API_BASE_URL=http://localhost:8081/users
```

### 4. Configurar e Iniciar o Banco de Dados

Você tem duas opções para configurar o banco de dados. O método com Docker é o recomendado.

#### Método Recomendado (com Docker)

**4.1. Iniciar o Contêiner do Banco de Dados:**
Na raiz do projeto, execute o comando para iniciar o servidor MySQL em um contêiner Docker:

```
npm run up
```

Aguarde alguns segundos para que o serviço do MySQL esteja totalmente no ar.

**4.2. Criar a Estrutura do Banco:**
Com o contêiner rodando, execute o comando para criar o banco de dados e a tabela `users`:

```
npm run db:setup
```

Este comando executará o script `backend/database/schema.sql` diretamente dentro do contêiner.

> <details>
>
> <summary><strong>⚠️ Nota para usuários do Windows (PowerShell) em caso de <code>ParserError</code></strong></summary>
>
> Se o comando acima falhar com um erro `ParserError` sobre o operador `<`, significa que seu terminal padrão é o PowerShell. Nesse caso, execute o seguinte comando diretamente no seu terminal em vez de usar o script do npm:
>
> ```powershell
> Get-Content backend/database/schema.sql | docker exec -i mysql mysql -u root -proot
> ```
>
> Alternativamente, você pode usar um terminal como **Git Bash** ou o **Prompt de Comando (CMD)**, onde o comando `npm run db:setup` funcionará perfeitamente.

</details>

#### Método Alternativo (com MySQL Local)

<details>
<summary><strong>Clique aqui se você prefere usar um MySQL instalado localmente</strong></summary>

1.  Certifique-se de que seu servidor MySQL local esteja rodando (geralmente na porta `3306`).
2.  Atualize o arquivo `/backend/.env` com seu usuário e senha do MySQL local, se forem diferentes de `root`.
3.  Execute o seguinte comando para criar o banco e a tabela:

    ```bash
    npm run db:setup:local
    ```

    > **Nota:** Para que isso funcione, você precisa ter o cliente de linha de comando do `mysql` instalado e configurado no PATH do seu sistema.

</details>

### 5. Executar a Aplicação

Com o banco de dados no ar e configurado, inicie o backend e o frontend simultaneamente:

```bash
npm run dev
```

Agora, você pode acessar a aplicação em seu navegador no endereço: **[http://localhost:5173](http://localhost:5173)**.

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

## 📜 Scripts Disponíveis

| Comando                  | Descrição                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `npm install`            | Instala as dependências para os workspaces `backend` e `frontend`.                    |
| `npm run dev`            | Executa o backend e o frontend simultaneamente em modo de desenvolvimento.            |
| `npm run up`             | Inicia o contêiner Docker do banco de dados em segundo plano.                         |
| `npm run down`           | Para e remove o contêiner do banco de dados.                                          |
| `npm run db:setup`       | Executa o script `schema.sql` **dentro do contêiner Docker** para configurar o banco. |
| `npm run db:setup:local` | Executa o script `schema.sql` em uma **instalação local** do MySQL.                   |
| `npm run build`          | Gera a versão de produção dos arquivos do frontend.                                   |
| `npm run format`         | Formata todos os arquivos do projeto utilizando o Prettier.                           |

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

## 🏗️ Estrutura do Projeto

```
crud-simples-cadastro/
├── backend/
│   ├── database/
│   │   └── schema.sql    # Script de criação da estrutura do banco
│   ├── src/
│   │   ├── config/       # Configuração do banco de dados (db.js)
│   │   ├── controllers/  # Lógica de requisição/resposta (userController.js)
│   │   ├── middlewares/  # Funções intermediárias (logger, error handler, validators)
│   │   ├── models/       # Classes de modelo (User.js)
│   │   ├── repositories/ # Camada de acesso aos dados (userRepository.js)
│   │   ├── services/     # Regras de negócio (userService.js)
│   │   ├── routes/       # Definição das rotas da API (userRoutes.js)
│   │   ├── app.js        # Configuração principal do Express
│   │   └── server.js     # Ponto de entrada para iniciar o servidor
│   ├── .env              # Variáveis de ambiente do backend
│   └── package.json      # Dependências e scripts do backend
├── frontend/
│   ├── src/
│   │   ├── script.js     # Lógica principal do frontend (chamadas de API, manipulação do DOM)
│   │   └── style.css     # Estilização da aplicação
│   ├── .env              # Variáveis de ambiente do frontend
│   ├── index.html        # Estrutura HTML da página
│   └── package.json      # Dependências e scripts do frontend
├── .gitignore            # Arquivos e pastas a serem ignorados pelo Git
├── docker-compose.yml    # Configuração do serviço do banco de dados
├── package.json          # Scripts e configuração do monorepo (workspaces)
└── README.md             # Esta documentação
```

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Se você tiver alguma ideia para melhorar este projeto, sinta-se à vontade para criar uma _issue_ ou enviar um _pull request_.

1.  Faça um _fork_ do projeto.
2.  Crie uma nova _branch_ (`git checkout -b feature/sua-feature`).
3.  Faça o _commit_ de suas alterações (`git commit -m 'Adiciona nova feature'`).
4.  Faça o _push_ para a _branch_ (`git push origin feature/sua-feature`).
5.  Abra um _Pull Request_.

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

<div align="center">

## 👤 Autor

**Ney Lucas**

<p>
  <a href="https://www.linkedin.com/in/ney-lucas-a72b89353/">LinkedIn</a> |
  <a href="https://github.com/NeyLucas">GitHub</a>
</p>
</div>

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**
