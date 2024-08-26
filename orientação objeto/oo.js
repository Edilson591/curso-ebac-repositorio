function Paciente(name,tipoExame,espessuraEmCm) {
    this.name = name;
    this.tipoExame = tipoExame;
    this.espessuraEmCm = espessuraEmCm;
}

function CalculoKvp(name,tipoExame,espessuraEmCm,kvp) {
    Paciente.call(this,name,tipoExame,espessuraEmCm)
    this.kvp = kvp;

    this.calKvp = function() {
       this.kvp = (2*espessuraEmCm) + 30
       return `O kvp utilizado no paciente ${name} foi ${this.kvp} kvps`;
    };
};

function CalculoMas(name,ma,tempoEmSegundos){
    Paciente.call(this,name)
    this.ma = ma
    this.tempoEmSegundos = tempoEmSegundos

    this.CalculoMas = function() {
        let mas = this.ma / this.tempoEmSegundos
        return `O paciente ${this.name} teve um mas de ${mas} Mas`
    }
}

const nomepaciente = "Jacira dos Santos"
const tipoExame = "Ombro D"
const espessuraDeCorte = 15
const maPaciente = 100
const tempo = 0.5


const novoPaciente = new Paciente(nomepaciente,tipoExame,espessuraDeCorte);
const calculoKvp = new CalculoKvp(nomepaciente,tipoExame,espessuraDeCorte,0);
const calculoMas = new CalculoMas(nomepaciente,maPaciente,tempo);

console.log(calculoKvp.calKvp());
console.log(calculoMas.CalculoMas());