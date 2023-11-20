// Boss Level Part 1
// Constraint : name, power and life properties are private

// Create a Hero class
class Hero {

    // Add private properties
    private heroName: string;
    private heroPower: number;
    private heroLife: number;
    weapon!: Weapon;

    // Constructor method which will be called when creating an object
    constructor(name: string, power: number, life: number){
        this.heroName = name;
        this.heroPower = power;
        this.heroLife = life;
    }

    // Getter methods to access private properties
    get name() : string {
        return this.heroName;
    }

    get power(): number{
        return this.heroPower;
    }

    get life(): number{
        return this.heroLife;
    }
    
    // attack method reduce the life of opponent by as much power of attacker
    attack(opponent: Hero){

        // Bonus attack multiply by 2 if one of these conditions is verified
        if((this instanceof HeroAxe && opponent instanceof HeroSword ) || 
           (this instanceof HeroSword && opponent instanceof HeroSpear) ||
           (this instanceof HeroSpear && opponent instanceof HeroAxe)){

            opponent.heroLife -= this.heroPower * 2;

            console.log(`${this.name} attacked ${opponent.name} with ${this.weapon.name} and inflicts on him ${this.power * 2} damages `);
            console.log(`The ${opponent.name}'s rest life is now: ${opponent.life} and the ${this.name}'s rest life is always: ${this.life} `);
        }else{
            opponent.heroLife -= this.heroPower;

            console.log(`${this.name} attacked ${opponent.name} with ${this.weapon.name} and inflicts on him ${this.power} damages `);
            console.log(`The ${opponent.name}'s rest life is now: ${opponent.life} and the ${this.name}'s rest life is always: ${this.life} `);
        }
        
        
    }

    // isAlive method indicate if the opponent receiving the attack is still alive after
    isAlive(){
        if(this.life > 0){
            return `${this.name} is still alive.`;
            
        }else{
            return `${this.name} is dead.`;
        }
    }
}


// Boss Level Part 2
// Create a Weapon class
class Weapon {

    // Add property
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Create HeroAxe class that inherit from Hero
class HeroAxe extends Hero{

    // Call the constructor of their parent
    constructor(name: string, power: number, life: number){
        super(name, power, life);
        this.weapon = new Weapon("Axe"); // Initialize Axe weapon with instances of Weapon
    }

    attack(opponent: Hero) {
        if(opponent instanceof HeroSword){
            super.attack(opponent); // Call the method attack of the parent class
        }else{
            super.attack(opponent); 
        }
    }
}

// Create HeroSword class that inherit from Hero
class HeroSword extends Hero{

    // Call the constructor of their parent
    constructor(name: string, power: number, life: number){
        super(name, power, life);
        this.weapon = new Weapon("Sword"); // initialize Sword weapon with instances of Weapon
    }

    attack(opponent: Hero) {
        if(opponent instanceof HeroSpear){
            super.attack(opponent); // Call the method attack of the parent class
        }else{
            super.attack(opponent);
        }
    }
}

// Create HeroSpear class that inherit from Hero
class HeroSpear extends Hero {
    
    // Call the constructor of their parent
    constructor(name: string, power: number, life: number){
        super(name, power, life);
        this.weapon = new Weapon("Spear"); // initialize Spear weapon with instances of Weapon
    }

    attack(opponent: Hero) {
        if(opponent instanceof HeroAxe){
            super.attack(opponent); // Call the method attack of the parent class
        }else{
            super.attack(opponent);
        }
    }
}



// New instances
let swordHero = new HeroSword ("Link", 10, 100);
let axeHero = new HeroAxe ("Kratos", 20, 100);
let spearHero = new HeroSpear ("Britney", 5, 100);

console.log(axeHero.attack(swordHero), swordHero.isAlive());
console.log(axeHero.attack(spearHero), spearHero.isAlive);
console.log(swordHero.attack(spearHero), spearHero.isAlive());
console.log(spearHero.attack(axeHero), axeHero.isAlive());


 










