import express from 'express';

const app = express();
app.use(express.json());
process.on('uncaughtException', (err) => {
    console.error('[ERRO DE PROCESSO - uncaughtException]: ',  err.message);
});

process.on('unhandledRejection', (reason) => {
    console.error('[PROMISSE REJEITADA - unhandledRejection]:', reason);
});

app.get('/sucesso', (req , res, next) => {
    res.json({success: true, message: 'Operação Realizada Com Sucesso!'});
});

app.get('/erro-sincrono', (req, res, next) => {
    try{
        throw new Error('Falha ao processar a regra de negócio!');
    } catch(erro){
        next(erro);
    }
});

app.get('/erro-assincrono', async (req, res, next) => {
    try{
        await Promisse.reject(new Error('Erro na cunsolta no banco de dados externo'));
    }catch(erro){
        next(erro);
    }
});

app.use((err,req,res,next) => {
    console.error(`[LOG DE ERRO INTERNO]: ${err.stack}`);

    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || 'Erro interno no servidor'
    });
});

app.listen(3000, ()=>{console.log('Servidor imortal rodando na porta 3000')});