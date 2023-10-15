import Fornecedor from "./Fornecedor"

class Produto {
    nome: string
    quantidade: number = 0
    codigoDeBarras!: number
    fornecedor!: Fornecedor
    valor: number = 0.00
    margemDeVenda: number = 2
    valorDeVenda: number = this.valor * this.margemDeVenda

    constructor(nome: string, quantidade: number, _fornecedor: Fornecedor){
        this.nome = nome;
        this.quantidade = quantidade
        this.fornecedor = this.fornecedor
    }

}