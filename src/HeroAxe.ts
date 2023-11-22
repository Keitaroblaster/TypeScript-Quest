import {Hero} from "./Hero";
import Weapon from "./Weapon";

// Create HeroAxe class that inherit from Hero
export default class HeroAxe extends Hero{

    // Call the constructor of their parent
    constructor(name: string, power: number, life: number){
        super(name, power, life);
        this.weapon = new Weapon("Axe", 15); // Initialize Axe weapon with instances of Weapon
    }

    
    attack(opponent: Hero) {
        super.attack(opponent); // Call the method attack of the parent class
    }
}