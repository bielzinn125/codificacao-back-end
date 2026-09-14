# Aula 02 - Módulos ES Modules e Sistema de Logs (Node.js)

Este projeto exemplifica a criação de um sistema simples de registros de logs utilizando **ES Modules (`import`/`export`)** no Node.js, com manipulação de arquivos assíncrona (`fs/promises`) e manipulação de caminhos (`path`).

---

## 🚀 O que este projeto faz

1. **Formatação de Logs:** Formata mensagens adicionando a data atual (`YYYY-MM-DD`) e a hora local (`HH:MM:SS`).
2. **Criação Automática de Diretórios:** Cria a pasta `Logs/` dinamicamente caso ela não exista.
3. **Persistência em Arquivo:** Grava as mensagens formatadas no arquivo `Logs/syslog.log` sem sobrescrever o conteúdo anterior.

---

## 🛠️ Tecnologias e Módulos Utilizados

* **Node.js** (Ambiente de execução JavaScript)
* **ES Modules (`"type": "module"`)**: Importação de módulos nativos e locais usando `import/export`.
* **`fs/promises`**: Módulo nativo para manipulação assíncrona de arquivos (`mkdir`, `appendFile`).
* **`path`**: Módulo nativo para construção de caminhos absolutos independentes do sistema operacional.
* **`url` (`fileURLToPath`)**: Utilizado para replicar a funcionalidade de `__dirname` dentro do contexto de ES Modules.

---

## 📂 Estrutura de Pastas

```text
aula02-modules-commonjs-esm/
├── Logs/
│   └── syslog.log       # Arquivo onde os logs são gravados
├── index.js             # Script principal que executa a gravação dos logs
├── utilitario.js        # Módulo de auxílio com a função de formatação
├── package.json         # Configuração do projeto (com "type": "module")
└── README.md            # Documentação da aula