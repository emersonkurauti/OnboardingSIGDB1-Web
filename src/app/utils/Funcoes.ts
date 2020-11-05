export class Funcoes {
    static addFiltro(filtro: string, chave: string, valor: any): string{
        let result = '';
        if (filtro) {
        result += `${filtro}&`;
        }

        result += `${chave}=${valor}`;
        return result;
    }
}