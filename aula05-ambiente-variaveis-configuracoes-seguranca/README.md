📘 Aula 05 — Variáveis de Ambiente e Configurações de Segurança

Projeto desenvolvido durante a Aula 05, com foco no uso de variáveis de ambiente, gerenciamento de configurações sensíveis e boas práticas básicas de segurança em aplicações Node.js.

🎯 Objetivo

Aprender a separar informações sensíveis do código-fonte utilizando variáveis de ambiente, evitando que senhas, tokens, chaves e outras credenciais sejam expostas ou versionadas acidentalmente.

Nesta aula também são apresentadas boas práticas para validar as configurações necessárias antes da inicialização da aplicação.

📚 Conceitos abordados

Durante esta aula foram estudados os seguintes conceitos:

🔐 O que são variáveis de ambiente;

🛡️ Por que não devemos colocar credenciais diretamente no código;

📄 Diferença entre .env e .env.example;

📦 Utilização do pacote dotenv;

⚙️ Carregamento de configurações através de process.env;

✅ Validação de variáveis obrigatórias;

🚫 Proteção do arquivo .env através do .gitignore;

🔑 Boas práticas para armazenamento de senhas, tokens e chaves secretas;

📝 Organização das configurações da aplicação.

📁 Estrutura do projeto
aula05-variaveis-ambiente-configuracoes-seguranca/
│
├── 📂 node_modules/
│
├── 🔒 .env
├── 📄 .env.example
├── 🚫 .gitignore
├── 🟢 app.js
├── 📦 package.json
├── 📦 package-lock.json
└── 📖 README.md

🔒