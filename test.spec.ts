import { Pokemon } from "./Pokemon";
import {attack, getFaster} from "./pokemons-utils";

describe("This is pokemons tests", () => {

    let pikachu = new Pokemon('Pikachu', 5, 10, 2);
    let salameche = new Pokemon('Salameche', 3, 10, 2);

    test("Check the getFaster function", () => {
        expect(getFaster(salameche, pikachu)).toEqual(pikachu);
    });

    test("Check the attack function", () => {
        expect(attack(pikachu, salameche)).toEqual(7);
    });
});