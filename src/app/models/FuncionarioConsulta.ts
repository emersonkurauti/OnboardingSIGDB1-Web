import { Empresa } from './Empresa';

export interface FuncionarioConsulta {
    id: number;
    nome: string;
    cpf: string;
    dataContratacao: string;
    empresaNome: string;
    cargoDescricao: string;
}