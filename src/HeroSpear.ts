import {Hero} from "./Hero";
import Weapon from "./Weapon";

// Create HeroSpear class that inherit from Hero
export default class HeroSpear extends Hero {
    
    // Call the constructor of their parent
    constructor(name: string, power: number, life: number){
        super(name, power, life);
        this.weapon = new Weapon("Spear",5); // initialize Spear weapon with instances of Weapon
    }


    attack(opponent: Hero) {
        super.attack(opponent); // Call the method attack of the parent class
        
    }
}