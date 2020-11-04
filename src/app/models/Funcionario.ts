import { Empresa } from './Empresa';

export interface Funcionario {
    id: number;
    nome: string;
    cpf: string;
    dataContratacao: string;
    empresa: Empresa;
}