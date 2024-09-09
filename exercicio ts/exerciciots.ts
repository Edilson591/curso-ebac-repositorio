
class Pessoa {
    name: string;

    constructor(name:string) {
       this.name = name;
    }


    dizOla() {
        return `Olá ${this.name}`;
    }
}

class Operacao extends Pessoa {
    gorgeta(coefi:number,value:number) {
        return coefi * value
    }
}
const pessoa = new Pessoa("Edilson");
const operacao = new Operacao("Jacira")

console.log(operacao.gorgeta(5,8))
console.log(pessoa.dizOla());









