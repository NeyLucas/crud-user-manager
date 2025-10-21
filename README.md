<div align="center">

# CRUD Simples - Cadastro de Usuários

<p>
  <img src="https://img.shields.io/badge/status-Concluído-brightgreen" alt="Badge de Status do Projeto">
  <img src="https://img.shields.io/badge/licença-MIT-blue" alt="Badge da Licença">
  <a href="https://www.linkedin.com/in/ney-lucas-a72b89353/">
    <img src="https://img.shields.io/badge/LinkedIn-Ney%20Lucas-blue?style=flat&logo=linkedin" alt="Meu Perfil no LinkedIn">
  </a>
</p>

<p>
  Um projeto Full-Stack que implementa as quatro operações básicas de um CRUD (Create, Read, Update, Delete) para gerenciar um cadastro de usuários. A aplicação é construída com uma arquitetura de monorepo, separando claramente o <code>backend</code> e o <code>frontend</code>.
</p>

<h2>
  <a href="https://crud-user-manager-orpin.vercel.app/" target="_blank">
    Clique Aqui Para Testar a Aplicação
  </a>
</h2>

> **Atenção:** A v1.0 deste projeto não é responsiva. Para uma experiência ideal, por favor, acesse a partir de um **desktop**. 🖥️

</div>

---

## 🎨 Visão Geral do Projeto

O objetivo deste projeto é demonstrar a construção de uma aplicação web completa, desde a API REST no backend até a interface reativa no frontend.

Esta é a **v1.0** do projeto, focada em estabelecer uma base sólida com um frontend estático (HTML, CSS e JavaScript puro). Uma **v2.0**, com tecnologias mais modernas e funcionalidades avançadas, já está planejada.

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

## ✨ Funcionalidades Principais (v1.0)

-   **Criação de Usuários:** Formulário para adicionar novos usuários ao banco de dados.
-   **Leitura e Listagem:** Tabela que exibe todos os usuários cadastrados em tempo real.
-   **Atualização de Usuários:** Edição dos dados de um usuário diretamente na tabela.
-   **Exclusão de Usuários:** Remoção de usuários do sistema com uma etapa de confirmação.
-   **Validação de Dados:** Validações no backend para garantir a integridade dos dados e no frontend para feedback rápido ao usuário.
-   **Middleware de Segurança:** Uso de CORS para permitir requisições apenas de origens confiáveis.
-   **Tratamento de Erros Centralizado:** Um middleware no backend lida com todos os erros da aplicação de forma consistente.

**[⬆ Voltar ao topo](#crud-simples---cadastro-de-usuários)**

---

## 🗺️ Roadmap do Projeto

Esta seção detalha os próximos passos para a finalização da versão atual e os planos para a futura v2.0.

### 🎯 v1.0 - Concluída

-   [x] Criar README.
-   [x] Modularizar o código JavaScript do frontend.
-   [x] Adicionar texto indicativo quando a tabela de usuários estiver vazia.
-   [x] Adicionar uma sidebar de navegação.
-   [x] Modularizar CSS.
-   [x] Fazer o deploy do backend no Render.
-   [x] Fazer o deploy do frontend na Vercel.

### 🚀 v2.0 - Próximas Grandes Features

A versão 2.0 será uma reescrita completa, focada em modernizar a stack e adicionar funcionalidades avançadas para uma melhor experiência de usuário.

-   **Frontend:**
    -   Framework: Migração para **React**.
    -   Estilização: Utilização de **Tailwind CSS**.
-   **Backend:**
    -   Banco de Dados: Migração do MySQL para **PostgreSQL**.
    -   ORM: Adoção do **Prisma** para a camada de acesso a dados.
-   **Qualidade de Código:**
    -   Implementação de **testes unitários** com **Jest**.
-   **Novas Funcionalidades:**
    -   **UI Reformulada:** Uma interface de usuário mais moderna e intuitiva.
    -   **Busca Inteligente:** Campo de busca com _debounce_ para evitar requisições excessivas.
    -   **Filtros Avançados:** Filtrar usuários por e-mail e data de criação.
    -   **Paginação:** Para lidar com grandes volumes de dados de forma eficiente.
    -   **Modo Dark:** Tema escuro para conforto visual.
    -   **Responsividade:** Layout adaptável para dispositivos móveis.
    -   **Notificações (Toast):** Feedback visual para operações de sucesso e erro.

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

## 🚀 Como Executar o Projeto Localmente

Para executar este projeto em seu ambiente local, siga os passos abaixo. Você precisará ter o [Node.js](https://nodejs.org/) e o [NPM](https://www.npmjs.com/) instalados. O uso do [Docker](https://www.docker.com/products/docker-desktop/) é **altamente recomendado** para uma configuração mais simples e consistente.

### 1. Clonar o Repositório

```bash
git clone https://github.com/NeyLucas/crud-user-manager.git
cd crud-user-manager
```

### 2. Instalar as Dependências

Este projeto utiliza workspaces do NPM. Instale todas as dependências a partir da raiz do projeto:

```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente

Crie os arquivos `.env` manualmente nas pastas `/backend` e `/frontend` com o conteúdo abaixo.

#### Backend (`/backend/.env`)

```env
# porta padrão usada no desenvolvimento
PORT=8081 

# lista de URLs do frontend permitidas pelo CORS para desenvolvimento (vite, live server)
CORS_ORIGIN_WHITELIST=http://localhost:5173,http://127.0.0.1:5500

# credenciais do banco (padrão do Docker no docker-compose.yml)
# Se estiver rodando MySQL localmente coloque suas credenciais
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=root

# banco de dados usado no ambiente de desenvolvimento
MYSQL_DB=cadastro_usuarios

# manter falso se estiver rodando localmente
USE_SSL=false
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
> **Atenção:** O docker-compose.yml exige que exista um volume 'banco-crud-cadastro' externo.
> Se não quiser criar, basta apagar a linha `external: true` no arquivo e rodar o próximo comando.

```bash
npm run up
```

Aguarde alguns segundos para que o serviço do MySQL esteja totalmente no ar.

**4.2. Criar a Estrutura do Banco:**
Com o contêiner rodando, execute o comando para criar o banco de dados e a tabela `users`:

```bash
npm run db:setup
```

> <details>
> <summary><strong>⚠️ Nota para usuários do Windows (PowerShell) em caso de <code>ParserError</code></strong></summary>
>
> Se o comando acima falhar, execute o seguinte comando diretamente no seu terminal:
>
> ```powershell
> Get-Content backend/database/schema.sql | docker exec -i mysql mysql -u root -proot
> ```
>
> Alternativamente, use um terminal como **Git Bash** ou **CMD**, onde o `npm run db:setup` funcionará.
> </details>

#### Método Alternativo (com MySQL Local)

<details>
<summary><strong>Clique aqui se você prefere usar um MySQL instalado localmente</strong></summary>

1.  Certifique-se de que seu servidor MySQL local esteja rodando.
2.  Atualize o arquivo `/backend/.env` com seu usuário e senha do MySQL local.
3.  Execute o seguinte comando para criar o banco e a tabela:

    ```bash
    npm run db:setup:local
    ```

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
crud-user-manager/
├── backend/
│   ├── database/
│   │   └── schema.sql    # Script de criação da estrutura do banco
│   ├── src/
│   │   └── ... (arquivos do backend)
│   ├── .env              # Variáveis de ambiente do backend
│   └── package.json      # Dependências e scripts do backend
├── frontend/
│   ├── src/
│   │   └── ... (arquivos do frontend)
│   ├── .env              # Variáveis de ambiente do frontend
│   └── package.json      # Dependências e scripts do frontend
├── .gitignore            # Arquivos e pastas a serem ignorados pelo Git
├── docker-compose.yml    # Configuração do serviço do banco de dados
├── package.json          # Scripts e configuração do monorepo
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
