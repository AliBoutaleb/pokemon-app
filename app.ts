import { Pokemon } from './Pokemon';
import {fight} from "./pokemons-utils";

let pikachu = new Pokemon('Pikachu', 5, 10, 2);
let salameche = new Pokemon('Salameche', 3, 10, 2);

fight(pikachu, salameche);