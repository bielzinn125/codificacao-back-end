import express from 'express';

const app = express();
app.use(express.json());
process.on('uncaughtException', (err) => {
    console.error('[ERRO DE PROCESSO - uncaughtException]: ',  err.message);
});

process.on('unhandledRejection', (reason) => {
    console.error('[PROMISSE REJEITADA - unhandledRejection]:', reason);
});

app.get('/sucesso', (req , res) => {
    res.json({success: true, message: 'Operação Realizada Com Sucesso!'});
});

app.get('/erro-soncrono', (req, res, next) => {
    try{
        throw new Error('Falha ao processar a regra de negócio!')
    } catch(erro){
        next(erro);
    }
});

app.get('/erro-assincrono', async (req,res,next) => {
    try{
        await Promisse.reject(new Error('Erro na cunsolta no banco de dados externo'));
    }catch(erro){
        next(erro);
    }
});