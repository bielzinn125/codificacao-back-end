import fs, { createWriteStream } from 'fs';

const data = new Date().toISOString().split('T')[0];
const hora = new Date().toLocaleTimeString();

const streamEscrita = fs.createWriteStream('servidor.log');
console.log('Gerando arquivo de log simulado...');

for( let i = 0; i < 400000; i++){
    const tipo = i % 5 === 0 ? 'ERROR' : 'INFO';
    streamEscrita.write(`[${data} - ${hora}] Linha ${i}: Status 200 - Mensagem de Teste ${tipo} \n`);

}
streamEscrita.end();