Aula 06 - Servidor Web em Node.js (Módulo http)

Este projeto faz parte do módulo de Codificação Back-End e demonstra a criação de um servidor HTTP simples e nativo utilizando o módulo http do Node.js.

🚀 Tecnologias Utilizadas

Node.js (Utilizando módulos ES/ESM - import http from 'http')

Módulo Nativo http

📌 Funcionalidades

Servidor HTTP na porta 3000

Logs no terminal: Registra o método HTTP e a rota (req.url) de cada requisição recebida.

Cabeçalhos de Segurança Padrão:

X-Content-Type-Options: nosniff (impede a adivinhação do tipo MIME)

X-Frame-Options: DENY (proteção contra Clickjacking)

Gerenciamento de Rotas Simples:

GET /status: Retorna um JSON informando que o servidor está online ({"servidorWeb": "Online"}).

Qualquer outra rota: Retorna erro 404 em formato JSON ({"erro": "Página não encontrada"}).