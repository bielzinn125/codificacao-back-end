import express from 'express';

const app = express();
app.use(express.json());
process.on('uncaughtException', (err) => {
    console.error('[ERRO DE PROCESSO - uncaughtException]: ',  err.message);
});

process.on('unhandledRejection', (reason) => {
    console.error('[PROMISSE REJEITADA - unhandledRejection]:', reason);
});
