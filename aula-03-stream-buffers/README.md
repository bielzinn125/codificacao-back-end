# 📚 Aula 03 — Streams e Buffers

Nesta aula, vamos trabalhar com **Streams do Node.js** para processar arquivos de log de forma eficiente, especialmente quando estamos lidando com arquivos grandes.

A ideia principal é evitar carregar todo o conteúdo do arquivo para a memória. Em vez disso, o arquivo será lido **aos poucos, linha por linha**, permitindo que o processamento aconteça de maneira mais econômica e escalável.

---

## 🎯 Objetivo

O objetivo da atividade é processar o arquivo `servidor.log`, identificar todas as linhas que contêm a palavra `ERROR` e armazenar essas linhas em um novo arquivo chamado `apenas_erros.log`.

Durante o processamento, também será acompanhado o **consumo de memória da aplicação**, comparando os valores antes e depois da leitura do arquivo.

### Fluxo da aplicação

```text
servidor.log
     │
     ▼
 Read Stream
     │
     ▼
 readline
     │
     ▼
Linha por linha
     │
     ├── Contém "ERROR"? ── Não ──► Ignora
     │
     └── Sim
          │
          ▼
   Write Stream
          │
          ▼
apenas_erros.log
```

---

## ⚙️ Como funciona

O processamento é dividido em algumas etapas:

### 1. 📖 Leitura do arquivo

O arquivo `servidor.log` é aberto utilizando um **Read Stream** através do `fs.createReadStream()`.

Dessa forma, o Node.js não precisa carregar o arquivo inteiro na memória de uma única vez.

### 2. 🔎 Leitura linha por linha

O `readline.createInterface()` é utilizado para transformar o stream em uma interface capaz de percorrer o arquivo linha por linha.

Com `for await...of`, cada linha pode ser processada de maneira assíncrona:

```js
for await (const linha of rl) {
  // processamento da linha
}
```

Isso permite trabalhar com arquivos grandes sem precisar armazenar todo o conteúdo em uma variável.

### 3. 🚨 Identificação dos erros

Cada linha é analisada para verificar se contém a palavra `ERROR`.

Quando um erro é encontrado:

* a linha é enviada para o arquivo de saída;
* o contador de erros é incrementado;
* o processamento continua normalmente com a próxima linha.

### 4. 💾 Escrita do resultado

As linhas que possuem `ERROR` são gravadas em `apenas_erros.log` utilizando um **Write Stream** criado com `fs.createWriteStream()`.

Assim como na leitura, a escrita também acontece de forma progressiva.

### 5. 🧠 Monitoramento da memória

Antes e depois do processamento, a aplicação utiliza:

```js
process.memoryUsage()
```

para obter informações sobre o uso de memória.

São observados principalmente:

* **RSS (Resident Set Size):** quantidade de memória ocupada pelo processo na memória RAM.
* **Heap:** memória utilizada pelo heap do JavaScript/Node.js.

Ao final, também é informado o número total de linhas encontradas contendo `ERROR`.

---

## 🧠 Conceitos praticados

Durante esta aula, são trabalhados conceitos importantes do Node.js:

* 📥 **Read Streams** — leitura de arquivos em partes;
* 📤 **Write Streams** — escrita progressiva de dados;
* 🔄 **Processamento sob demanda** — evitando carregar o arquivo inteiro na memória;
* 📑 **`readline.createInterface()`** — processamento de dados linha a linha;
* ⏳ **`for await...of`** — iteração assíncrona sobre o stream;
* 🧠 **`process.memoryUsage()`** — acompanhamento do consumo de memória;
* ⚡ **`async/await`** — controle de operações assíncronas;
* 📊 **Contagem e filtragem de dados** durante a leitura.

---

## 📂 Estrutura esperada

```text
.
├── servidor.log
├── apenas_erros.log
├── index.js
└── README.md
```

> O arquivo `apenas_erros.log` é gerado pela aplicação durante a execução.

---

## ▶️ Executando o projeto

Com o Node.js instalado, execute:

```bash
node index.js
```

Durante a execução, serão exibidas informações como o consumo de memória no início e no final do processamento, além da quantidade de erros encontrados.

Exemplo:

```text
Memória inicial:
RSS: 25 MB
Heap: 4 MB

Processamento concluído!

Total de erros encontrados: 152

Memória final:
RSS: 28 MB
Heap: 5 MB
```

Os valores acima são apenas ilustrativos e podem variar de acordo com o tamanho do arquivo e o ambiente de execução.

---

## 💡 Por que utilizar Streams?

Imagine um arquivo de log com **alguns poucos megabytes**. Ler o arquivo inteiro de uma vez pode parecer tranquilo.

Agora imagine um arquivo com **vários gigabytes**.

Se utilizarmos uma abordagem que carrega todo o conteúdo para a memória, o consumo pode crescer bastante e até causar problemas na aplicação.

Com Streams, podemos trabalhar com os dados conforme eles chegam:

```text
Arquivo grande
     ↓
┌─────────┐
│ Parte 1 │ → processa
├─────────┤
│ Parte 2 │ → processa
├─────────┤
│ Parte 3 │ → processa
├─────────┤
│   ...   │
└─────────┘
```

Essa abordagem é especialmente útil para **logs, arquivos grandes, uploads, downloads e processamento de dados em grande escala**.

---

## 🚀 Resultado esperado

Ao finalizar a execução, o projeto deverá:

1. Ler `servidor.log` utilizando um **Read Stream**;
2. Processar o conteúdo linha por linha;
3. Identificar as linhas que possuem `ERROR`;
4. Salvar essas linhas em `apenas_erros.log`;
5. Contabilizar a quantidade de erros encontrados;
6. Exibir o consumo de memória antes e depois do processamento.

---

## 📌 Resumo

> **Streams permitem trabalhar com grandes volumes de dados de forma progressiva, evitando a necessidade de carregar todo o conteúdo na memória de uma única vez.**

Nesta aula, a combinação de **Streams + readline + async/await** permite criar um processamento de logs simples, eficiente e preparado para arquivos muito maiores.
