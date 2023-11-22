import {Hero} from "./Hero";


// Create function Battle
export function battle(hero1: Hero, hero2: Hero){
    while(hero1.isAlive() && hero2.isAlive()){
        hero1.attack(hero2);
        hero2.attack(hero1);
        
        if(hero1.life <= 0 || hero2.life <=0){
            break;
        }
    }

    if(hero1.life <= 0 && hero2.life <= 0){
        console.log("it's draw !!!");
    }else if(hero1.life <= 0){
        console.log(`${hero2.name} wins !!!`);
    }else{
        console.log(`${hero1.name} wins !!!`);
    }
}