"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon_1 = require("./Pokemon");
var pokemons_utils_1 = require("./pokemons-utils");
var pikachu = new Pokemon_1.Pokemon('Pikachu', 5, 10, 2);
var salameche = new Pokemon_1.Pokemon('Salameche', 3, 10, 2);
pokemons_utils_1.fight(pikachu, salameche);
