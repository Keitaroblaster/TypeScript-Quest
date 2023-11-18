//Boss Level Part 1
//Create a Hero class
//Contraint : name, power and life properties are private

class Hero {
    private _name: string;
    private _power: number;
    private _life: number

    constructor(name: string, power: number, life: number){
        this._name = name;
        this._power = power;
        this._life = life;
    }

    
    get name() : string {
        return this._name;
    }

    get power(): number{
        return this._power
    }

    get life(): number{
        return this._life
    }
    
    attack(opponent: Hero){
        opponent._life -= this._power;
        console.log(`${this.name} attacked ${opponent.name} and inflicts on him ${this.power} damages `);
        console.log(`The ${opponent.name}'s rest life is now: ${opponent.life} and the ${this.name}'s rest life is always: ${this.life} `);
    }

    isAlive(){
        if(this._life > 0){
            return true;
            
        }else{
            return false;
        }
    }
}

let perso1 = new Hero ("Jason", 10, 100);
let perso2 = new Hero ("Freddy", 15, 100);

console.log(perso1.attack(perso2));
console.log(perso2.attack(perso1));







