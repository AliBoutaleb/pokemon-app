"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./Pokemon");
var pokemons_utils_1 = require("./pokemons-utils");
describe("This is pokemons tests", function () {
    var pikachu = new Pokemon_1.Pokemon('Pikachu', 5, 10, 2);
    var salameche = new Pokemon_1.Pokemon('Salameche', 3, 10, 2);
    test("Check the getFaster function", function () {
        expect(pokemons_utils_1.getFaster(salameche, pikachu)).toEqual(pikachu);
    });
    test("Check the attack function", function () {
        expect(pokemons_utils_1.attack(pikachu, salameche)).toEqual(7);
    });
});
