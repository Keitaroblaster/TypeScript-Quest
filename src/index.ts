//Boss Level Part 1
//Create a Hero class
//Contraint : name, power and life properties are private

class Hero {

    // add private properties
    private _name: string;
    private _power: number;
    private _life: number

    // constructor method which will be called when creating an object
    constructor(name: string, power: number, life: number){
        this._name = name;
        this._power = power;
        this._life = life;
    }

    // getter methods to access private properties
    get name() : string {
        return this._name;
    }

    get power(): number{
        return this._power
    }

    get life(): number{
        return this._life
    }
    
    // attack method reduce the life of opponent by as much power of attacker
    attack(opponent: Hero){
        opponent._life -= this._power;
        console.log(`${this.name} attacked ${opponent.name} and inflicts on him ${this.power} damages `);
        console.log(`The ${opponent.name}'s rest life is now: ${opponent.life} and the ${this.name}'s rest life is always: ${this.life} `);
    }

    // isAlive method indicate if the opponent receiving the attack is still alive after
    isAlive(){
        if(this._life > 0){
            return true;
            
        }else{
            return false;
        }
    }
}

// new obect
let perso1 = new Hero ("Jason", 10, 100);
let perso2 = new Hero ("Freddy", 15, 100);

console.log(perso1.attack(perso2));
console.log(perso2.attack(perso1));







