class heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        if(this.tipo === 'mago'){
            ataque = 'usou magia';
        
        }else if(this.tipo === 'guerreiro'){
            ataque = 'usou espada';

        }else if(this.tipo === 'monge'){
            ataque = 'usou artes marciais';

        }else if (this.tipo === 'ninja'){
            ataque = 'usou shuriken';

        }else {
            ataque = 'realizou ataque desconhecido'
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi('Gorpo', 150, 'mago');
const guerreiro = new Heroi('Conan', 87, 'guerreiro');
const monge = new Heroi('Shau li', 35, 'monge');
const ninja = new Heroi('Hanzo', 32, 'ninja');

mago.atacar();  
guerreiro.atacar();  
monge.atacar();  
ninja.atacar();  