# 🎮 API de Jogos — Aula 10 | Rotas Dinâmicas com NestJS

Neste exercício trabalhamos com **rotas dinâmicas utilizando NestJS e TypeScript**.

Criamos uma API simples capaz de **buscar jogos pelo ID**, praticando a comunicação entre **Controller e Service** e utilizando o **Insomnia** para testar as requisições.

---

## 📌 O que foi desenvolvido

Durante a atividade trabalhamos com dois arquivos principais:

```text
src/
│
├── jogos.controller.ts
└── jogos.service.ts

Cada arquivo possui uma função dentro da aplicação:

Arquivo	Função
jogos.controller.ts	Recebe as requisições e define as rotas
jogos.service.ts	Contém a lógica para buscar os jogos

Também utilizamos o Insomnia para realizar os testes da API.

🎮 1. jogos.service.ts

O Service é responsável pela lógica da aplicação.

Primeiro criamos uma lista com alguns jogos:

private jogos = [
  { id: 1, titulo: 'Minecraft', estudio: 'Mojang Studio' },
  { id: 2, titulo: 'The Legend Of Zelda', estudio: 'Nintendo' },
  { id: 3, titulo: 'Grand theft Auto V', estudio: 'Rockstar North' },
  { id: 4, titulo: 'Elden Ring', estudio: 'FromSoftware' },
  { id: 5, titulo: 'God of War', estudio: 'Santa Monica Studio' },
];

Cada jogo possui três informações:

🔢 id → identifica o jogo
🎮 titulo → nome do jogo
🏢 estudio → estúdio responsável

Por enquanto, esses dados ficam armazenados apenas em um array, ou seja, não utilizamos banco de dados.

🔎 Buscando um jogo pelo ID

Criamos o método:

buscarPorId(id: number)

Ele recebe o ID do jogo e procura dentro da lista utilizando o find():

const jogo = this.jogos.find(j => j.id === id);

Por exemplo, se recebermos:

id = 3

A aplicação procura pelo jogo que possui:

id = 3

E encontra:

{
  "id": 3,
  "titulo": "Grand theft Auto V",
  "estudio": "Rockstar North"
}
⚠️ Tratamento de erro

Também verificamos se o jogo realmente existe.

Caso o ID não seja encontrado, utilizamos:

throw new NotFoundException(
  `Jogo com ID ${id} não localizado no estoque`
);

Assim, em vez de simplesmente retornar vazio, a API informa que o jogo não foi encontrado.

🌐 2. jogos.controller.ts

O Controller é responsável por receber as requisições feitas para a API.

Definimos:

@Controller('jogos')

Isso significa que a rota principal será:

/jogos
🔗 Rota dinâmica

A principal parte da atividade foi criar uma rota dinâmica:

@Get(':id')

O :id significa que podemos colocar diferentes valores na URL.

Por exemplo:

GET /jogos/1
GET /jogos/2
GET /jogos/3
GET /jogos/4
GET /jogos/5

A estrutura da rota continua sendo:

/jogos/:id

O que muda é o valor do ID.

Isso facilita bastante porque não precisamos criar uma rota diferente para cada jogo.

📥 3. Pegando o ID da URL

Para pegar o valor enviado na URL utilizamos:

@Param('id', ParseIntPipe) id: string

O:

@Param('id')

é responsável por pegar o ID.

Já o:

ParseIntPipe

garante que o valor recebido seja convertido para um número.

Por exemplo:

/jogos/4

O ID recebido será:

4

Depois enviamos esse valor para o Service:

return this.jogosService.buscarPorId(numId);
🧪 4. Testando no Insomnia

Utilizamos o Insomnia para testar as rotas criadas.

✅ Buscando um jogo existente

Por exemplo:

GET http://localhost:3000/jogos/1

A API retorna:

{
  "id": 1,
  "titulo": "Minecraft",
  "estudio": "Mojang Studio"
}

Podemos alterar o ID para buscar outros jogos:

GET /jogos/2
GET /jogos/3
GET /jogos/4
GET /jogos/5
❌ Testando um valor inválido

Também testamos:

GET http://localhost:3000/jogos/abc

Nesse caso recebemos:

400 Bad Request

Isso acontece porque o ParseIntPipe espera um valor numérico.

Então:

/jogos/1    ✅
/jogos/5    ✅
/jogos/abc  ❌
🔄 Fluxo da aplicação

O funcionamento da API pode ser entendido dessa forma:

                 🧑‍💻 INSOMNIA
                      │
                      ▼
              GET /jogos/:id
                      │
                      ▼
               🎯 CONTROLLER
                      │
                      ▼
                  @Param()
                      │
                      ▼
                ⚙️ SERVICE
                      │
                      ▼
              🔎 Busca pelo ID
                      │
             ┌────────┴────────┐
             ▼                 ▼
        🎮 Encontrou       ❌ Não encontrou
             │                 │
             ▼                 ▼
       Retorna o jogo     NotFoundException
📚 Conceitos praticados

Durante a atividade praticamos:

🚀 NestJS
📘 TypeScript
🎯 Controllers
⚙️ Services
💉 Injeção de dependência
🔗 Rotas dinâmicas
@Controller()
@Get()
@Param()
ParseIntPipe
NotFoundException
find()
🔢 Parâmetros de URL
🧪 Testes com Insomnia
⚠️ Tratamento de erros
🏁 Resultado

Ao final da atividade, conseguimos criar uma API capaz de buscar um jogo através do ID informado na URL.

O endpoint utilizado foi:

GET /jogos/:id

Exemplo:

GET http://localhost:3000/jogos/1

O fluxo ficou:

Insomnia
   ↓
Controller
   ↓
Parâmetro :id
   ↓
Service
   ↓
Busca no array
   ↓
Jogo encontrado

💡 O principal objetivo da aula foi entender como funcionam as rotas dinâmicas no NestJS, aprendendo como pegar um valor da URL com @Param() e utilizá-lo dentro do Service para realizar uma busca.