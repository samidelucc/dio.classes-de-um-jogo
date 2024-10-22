    class heroi {
        constructor(tipo, idade, ataque) {
        this.tipo = tipo
        this.idade = idade
        this.ataque = ataque
      }
      atacar() {
        console.log(`o tipo ${this.tipo} atacou usando ${this.ataque}`);
        }
    }

// instanciação da classe heroi

let heroiMago = new heroi("mago", 100, "magia")
let heroiGuerreiro = new heroi("guerreiro", 80, "espada")
let heroiMonge = new heroi("monge", 90, "artes marcias")
let heroiNinja = new heroi("ninja", 70, "shuriken")

// método 

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()

console.log(`\no heroi ${heroiMago.tipo} atacou usando ${heroiMago.ataque}`)

