# 🚀 Aula 07 — Projeto NestJS

> Projeto desenvolvido durante os estudos de **Back-end com Node.js e NestJS**, explorando a estrutura, organização e funcionamento de uma aplicação NestJS.

---

## 📚 Sobre o projeto

Este projeto faz parte da **Aula 07 — Projeto NestJS** e tem como objetivo colocar em prática os principais conceitos do framework **NestJS**.

A aplicação possui uma estrutura organizada em módulos, controllers e services, seguindo os princípios de organização e injeção de dependências do NestJS.

### 🎯 Objetivos

- 🟢 Criar uma aplicação utilizando NestJS
- 🟢 Entender a estrutura de um projeto NestJS
- 🟢 Trabalhar com Controllers
- 🟢 Trabalhar com Services
- 🟢 Utilizar Injeção de Dependência
- 🟢 Criar rotas HTTP
- 🟢 Executar a aplicação em ambiente de desenvolvimento
- 🟢 Gerar a versão de produção da aplicação

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| 🟦 **Node.js** | Ambiente de execução |
| 🐱 **NestJS** | Framework para desenvolvimento Back-end |
| 🔷 **TypeScript** | Linguagem principal |
| 📦 **npm** | Gerenciamento de dependências |

---

## 📁 Estrutura do projeto

```text
aula-07-projeto-nestjs/
│
├── 📂 dist/                  # Arquivos compilados
├── 📂 node_modules/          # Dependências
│
├── 📂 src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── 📂 test/                  # Testes
│
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
└── vitest.config.e2e.ts