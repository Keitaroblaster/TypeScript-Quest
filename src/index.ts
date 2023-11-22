import HeroAxe from "./HeroAxe";
import HeroSword from "./HeroSword";
import HeroSpear from "./HeroSpear";
import { battle } from "./Battle";

let swordHero = new HeroSword ("Link", 10, 100);
let axeHero = new HeroAxe ("Kratos", 5, 100);
let spearHero = new HeroSpear ("Britney", 10, 100);

// Test the battle method
battle(swordHero, axeHero);
battle(spearHero,swordHero);