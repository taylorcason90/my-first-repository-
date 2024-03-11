//adventurer called Robin
let adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
    
        //add companion to leo

    companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["a small hat and sunglasses"]
    }
},
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log('${this.name} rolled a ${result},' );
    }

};

adventurer.roll();

/// Part 2
class Character {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = 10;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}
 console.log(Character.MAX_HEALTH);

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
console.log(robin.companion);
robin.companion.roll();

/// Part 3
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
            
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    investigate() {
        console.log(`${this.name} is investigating...`);
        super.roll();
    }
    charm() {
        console.log(`${this.name} is putting charm...`);
        super.roll();
    }
}
let Keoti = new Adventurer("keoti" , "Rogue")
let Robin = new Adventurer('Robin'); 
console.log(Keoti.investigate());
Keoti.charm();
Keoti.investigate();
Robin.scout();
console.log(Robin);
console.log('---------------------------');


    console.log(adventurer.inventory); //loop that logs each item

