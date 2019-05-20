export class Pokemon {
    name: string;
    speed: number;
    life: number;
    damage: number;

    constructor(name: string, speed: number, life: number, damage: number){
        this.name = name;
        this.speed = speed;
        this.life = life;
        this.damage = damage;
    }
}