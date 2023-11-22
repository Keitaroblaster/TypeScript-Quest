import {Hero} from "./Hero";
import {HeroAxe} from "./HeroAxe";
import {Weapon} from "./Weapon";

// Create HeroSpear class that inherit from Hero
export class HeroSpear extends Hero {
    
    // Call the constructor of their parent
    constructor(name: string, power: number, life: number){
        super(name, power, life);
        this.weapon = new Weapon("Spear",5); // initialize Spear weapon with instances of Weapon
    }


    attack(opponent: Hero) {
        const attacker = this;
        if (opponent instanceof HeroAxe){
            opponent.life -= (attacker.power * 2)+ attacker.weapon.damage;

            console.log(`${attacker.name} attacked ${opponent.name} with ${attacker.weapon.name} and inflicts on him ${attacker.power * 2 + attacker.weapon.damage} damages `);
            console.log(`The ${opponent.name}'s rest life is: ${opponent.life} and the ${attacker.name}'s rest life is: ${attacker.life} `);
        }else{
            super.attack(opponent); // Call the method attack of the parent class
        }
    }
}