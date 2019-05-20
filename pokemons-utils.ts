import {Pokemon} from "./Pokemon";

export function isSuccess() {
    return Math.random() > 0.5;
}

export function getFaster(first: Pokemon, second: Pokemon) {
    return first.speed > second.speed ? first : second;
}

export function attack(first: Pokemon, second: Pokemon) {
    console.log(`${first.name} attack ${second.name}`);
    if(isSuccess()){
        second.life = (second.life - first.damage);
        console.log(`Attack is successful - ${second.name} has ${second.life} life points left \n`);
    } else {
        console.log(`Attack failed ! \n`)
    }
    return second.life;
}

export function fight(first: Pokemon, second: Pokemon) {

    // Get the pokemon who will attack first
    let currentPokemon = getFaster(first, second);
    let waitingPokemon = currentPokemon == first ? second : first;
    let tempPokemon;

    // Print the first pokemon
    console.log(`${currentPokemon.name} is faster than ${waitingPokemon.name}, he will attack first \n`);

    // Run the fight
    while (first.life > 0 && second.life > 0) {
        attack(currentPokemon, waitingPokemon);

        // Switch pokemon
        tempPokemon = currentPokemon;
        currentPokemon = waitingPokemon;
        waitingPokemon = tempPokemon;
    }

    // Print the winner
    let winner = first.life > 0 ? first : second;
    console.log(`${winner.name} is the winner`);
}

