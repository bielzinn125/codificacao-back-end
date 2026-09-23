import { CriarConvidadoDto } from "./src/criar-convidado.dto.ts";
export declare class ConvidadosController {
    listarConvidados(): string[];
    criarConvidado(criarConvidado: CriarConvidadoDto): {
        mensagem: string;
        dados: CriarConvidadoDto;
    };
}
