"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSuccess() {
    return Math.random() > 0.5;
}
exports.isSuccess = isSuccess;
function getFaster(first, second) {
    return first.speed > second.speed ? first : second;
}
exports.getFaster = getFaster;
function attack(first, second) {
    console.log(first.name + " attack " + second.name);
    if (isSuccess()) {
        second.life = (second.life - first.damage);
        console.log("Attack is successful - " + second.name + " has " + second.life + " life points left \n");
    }
    else {
        console.log("Attack failed ! \n");
    }
    return second.life;
}
exports.attack = attack;
function fight(first, second) {
    // Get the pokemon who will attack first
    var currentPokemon = getFaster(first, second);
    var waitingPokemon = currentPokemon == first ? second : first;
    var tempPokemon;
    // Print the first pokemon
    console.log(currentPokemon.name + " is faster than " + waitingPokemon.name + ", he will attack first \n");
    // Run the fight
    while (first.life > 0 && second.life > 0) {
        attack(currentPokemon, waitingPokemon);
        // Switch pokemon
        tempPokemon = currentPokemon;
        currentPokemon = waitingPokemon;
        waitingPokemon = tempPokemon;
    }
    // Print the winner
    var winner = first.life > 0 ? first : second;
    console.log(winner.name + " is the winner");
}
exports.fight = fight;
