var name = prompt("What is your name?");
// console.log(name);

//USS Assembly object
const USSAssembly = {
  name: name,
  hull: Math.random() * 20,
  firepower: Math.random() * 7,
  accuracy: Math.random() * 0.7,
};
console.log("\n");
console.log(`${USSAssembly.name}, hull ${USSAssembly.hull}`);


let alienShipNumber = 6;
let alienShips = [];

//create the alien ships
function createAlienShips() {
  // alienShips = [];
  for (let i = 0; i < alienShipNumber; i++) {
    let alienShip = {
      // name: `Ship Number ${i + 1}`, // Assigning a sequential ID to each alien ship
      hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3, // Random hull between 3 and 6
      firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2, // Random firepower between 2 and 4
      accuracy: Math.random() * (0.8 - 0.6) + 0.6, // Random accuracy between 0.6 and 0.8
    };
    alienShips.push(alienShip);
  }
  // console.log(alienShips)

  // const randomAlienShip = alienShips[Math.floor(Math.random() * alienShipNumber)];
  // return randomAlienShip;
  return alienShips;
}
createAlienShips();

//attack function for USS Assembly
function USSAttack(attacker, target) {
  const hitAccuracy = Math.random();
  if (hitAccuracy < target.accuracy) {
    console.log(`${attacker.name} hit the target Alien Ship`);
    alienShips.shift();
    // console.log(alienShips);
    console.log(`${alienShips.length} aliens ships has remained to attack`)
    target.hull -= attacker.firepower;
    if (alienShips.length === 0) {
      console.log("%c You WIN the space battle! All aliens are destroyed.🙌 🙌 🙌 🙌 🙌", 'color: white; font-weight:bold; font-size:20px; background-color:green;')
      return;
    }
    // USSAttack(attacker, target);
    var confirmed = confirm("Do you want to attack the next alien ship?");
    if (confirmed) {
      USSAttack(USSAssembly, alienShips[0]);
    } else {
      console.log("Hope you enjoyed the game")
    }
    // if (target.hull <= 0) {
    //   console.log(`Targeted alien ship is destroyed w`);

    //   // if (target.name === USSAssembly.name) {
    //   //   console.log("YOU LOST THE GAME")
    //   //   return;
    //   // }
    // }

  } else {
    console.log("You missed the targeted alien ship!!!");
    console.log("\n");
    console.log("Now Aliens attack you");
    alienAttack(alienShips[0], USSAssembly)
  }
}
// console.log(alienShips)
USSAttack(USSAssembly, alienShips[0]);

//Attack function for alien ships
function alienAttack(attacker, target) {
  const hitAccuracy = Math.random();
  if (hitAccuracy < target.accuracy) {
    console.log(`Alien ship hit the target USS Assembly!`);
    console.log("%c You LOST the game", 'color: white; font-weight:bold; font-size:20px; background-color:red');
    return;
  } else {
    console.log("%c Aliens missed the USS Assembly!", 'color: blue; font-weight:bold; font-size:20px');
    console.log("\n");
    console.log("Now USS Assembly Attacks");
    USSAttack(USSAssembly, alienShips[0])
  }
}
