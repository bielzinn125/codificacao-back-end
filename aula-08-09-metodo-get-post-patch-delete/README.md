API de Convidados — NestJS

Projeto desenvolvido com NestJS para praticar a criação de uma API REST simples de gerenciamento de convidados.

A aplicação utiliza uma estrutura baseada em Controller, Service e DTO, mantendo os dados em memória.

🚀 Tecnologias

Node.js

NestJS

TypeScript

REST API

DTO (Data Transfer Object)

📁 Estrutura principal

src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── convidados.controller.ts
├── convidados.service.ts
├── criar-convidado.dto.ts
└── main.ts

Responsabilidades

ConvidadosController: recebe as requisições HTTP e disponibiliza as rotas da API.

ConvidadosService: concentra as regras de negócio e manipula a lista de convidados.

CriarConvidadoDto: define os dados necessários para cadastrar um convidado.

AppModule: organiza e registra os componentes da aplicação.

main.ts: inicializa o servidor NestJS.

⚙️ Instalação

Clone o projeto e instale as dependências:

npm install

▶️ Executando o projeto

Desenvolvimento

npm run start:dev

Por padrão, a aplicação será executada em:

http://localhost:3000

📌 Endpoints

Listar convidados

GET /convidados

Retorna todos os convidados cadastrados.

Cadastrar convidado

POST /convidados
Content-Type: application/json

Exemplo de corpo:

{
  "nome": "João",
  "idade": 20
}

Atualizar idade

PATCH /convidados/:id
Content-Type: application/json

Exemplo:

PATCH /convidados/1

{
  "idade": 21
}

Remover convidado

DELETE /convidados/:id

Exemplo:

DELETE /convidados/1

🧪 Exemplos com cURL

curl http://localhost:3000/convidados

curl -X POST http://localhost:3000/convidados ^
  -H "Content-Type: application/json" ^
  -d "{\"nome\":\"João\",\"idade\":20}"

curl -X PATCH http://localhost:3000/convidados/1 ^
  -H "Content-Type: application/json" ^
  -d "{\"idade\":21}"

curl -X DELETE http://localhost:3000/convidados/1

No PowerShell, também é possível utilizar Invoke-RestMethod para testar os endpoints.

💾 Armazenamento

Os convidados estão sendo armazenados em uma lista dentro do ConvidadosService. Portanto:

os dados são temporários;

os registros são perdidos quando a aplicação é reiniciada;

não existe banco de dados nesta versão.

⚠️ Erro de dependência

Caso apareça uma mensagem semelhante a:

Nest can't resolve dependencies of the ConvidadosController

verifique se ConvidadosService está registrado no AppModule.

Exemplo:

@Module({
  imports: [],
  controllers: [ConvidadosController],
  providers: [ConvidadosService],
})
export class AppModule {}

Também confira se o ConvidadosService possui:

@Injectable()
export class ConvidadosService {
  // ...
}