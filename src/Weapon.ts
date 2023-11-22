// Create a Weapon class
export default class Weapon {

    // Add property
    private weaponName: string;
    private weaponDamage : number;

    constructor(name: string, damage: number) {
        this.weaponName = name;
        this.weaponDamage = damage;
    }


    // Getter methods to access private properties
    get name() : string {
        return this.weaponName;
    }
    get damage() : number{
        return this.weaponDamage;
    }


    // Setters method to modify private properties
    set name(newName : string) {
        this.weaponName = newName;
    }
    set damage(newDamage : number){
        this.weaponDamage = newDamage;
    }
}