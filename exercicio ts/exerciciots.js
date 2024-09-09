"use strict";
class Pessoa {
    constructor(name) {
        this.name = name;
    }
    dizOla() {
        return `Olá ${this.name}`;
    }
}
class Operacao extends Pessoa {
    gorgeta(coefi, value) {
        return coefi * value;
    }
}
const pessoa = new Pessoa("Edilson");
const operacao = new Operacao("Jacira");
console.log(operacao.gorgeta(5, 8));
console.log(pessoa.dizOla());
