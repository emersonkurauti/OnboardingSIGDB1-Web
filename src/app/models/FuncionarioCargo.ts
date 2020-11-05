export class FuncionarioCargo {
    cargoId: number;
    funcionarioId: number;
    dataVinculo: string;

    constructor(cargoId: number, funcionarioId: number, dataVinculo: string) {
        this.cargoId = cargoId;
        this.funcionarioId = funcionarioId;
        this.dataVinculo = dataVinculo;
    }

}