import Weapon from "./Weapon";
import HeroAxe from "./HeroAxe";
import HeroSword from "./HeroSword";
import HeroSpear from "./HeroSpear";

// Create a Hero class
export class Hero {

    // Add private properties
    private heroName: string;
    private heroPower: number;
    private heroLife: number;
    weapon!: Weapon; // Assignment guaranteed assertion operator to say that this attribute will be initialized but in a different way than the Hero class constructor
                        

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


    // Setters method to modify private properties
    set name(newHeroName : string) {
        this.heroName = newHeroName;
    }
    set power(newHeroPower : number) {
        this.heroPower = newHeroPower;
    }
    set life(newHeroLife: number){
        this.heroLife = newHeroLife;
    }
    
    
    // attack method reduce the life of opponent by as much power of attacker
    attack(opponent: Hero){
        const attacker = this; // constant to stock the value "this" which is the object instance because i'm lost in all these keywords this

        // Bonus attack multiply by 2 if one of these conditions is verified
        if((attacker instanceof HeroAxe && opponent instanceof HeroSword ) || 
           (attacker instanceof HeroSword && opponent instanceof HeroSpear) ||
           (attacker instanceof HeroSpear && opponent instanceof HeroAxe)){

            opponent.heroLife -= (attacker.heroPower * 2)+ attacker.weapon.damage;

            console.log(`${attacker.name} attacked ${opponent.name} with ${attacker.weapon.name} and inflicts on him ${attacker.power * 2 + attacker.weapon.damage} damages `);
            console.log(`The ${opponent.name}'s rest life is: ${opponent.life} and the ${attacker.name}'s rest life is: ${attacker.life} `);
        }else{
            opponent.heroLife -= attacker.heroPower + attacker.weapon.damage;

            console.log(`${attacker.name} attacked ${opponent.name} with ${attacker.weapon.name} and inflicts on him ${attacker.power + attacker.weapon.damage} damages `);
            console.log(`The ${opponent.name}'s rest life is: ${opponent.life} and the ${attacker.name}'s rest life is: ${attacker.life} `);
        }
    }
    

    // isAlive method indicate if the opponent receiving the attack is still alive after
    isAlive(){
        const attacker = this;
        if(attacker.life > 0){
            return `${attacker.name} is still alive.`;
            
        }else{
            return `${attacker.name} is dead.`;
        }
    }
}