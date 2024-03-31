var name = prompt("What is your name?");
console.log(name);
const USSAssembly = {
  name: name,
  hull: Math.random() * 20,
  firepower: Math.random() * 7,
  accuracy: Math.random() * 0.7,
};
console.log(`${USSAssembly.name}, hull ${USSAssembly.hull}`);

let alienShipNumber = 6;
let alienShips = [];

function createAlienShips() {
  alienShips = [];
  // let randomAlienShip ;
  for (let i = 0; i < alienShipNumber; i++) {
    let alienShip = {
      name: `Ship Number ${i + 1}`, // Assigning a sequential ID to each alien ship
      hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3, // Random hull between 3 and 6
      firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2, // Random firepower between 2 and 4
      accuracy: Math.random() * (0.8 - 0.6) + 0.6, // Random accuracy between 0.6 and 0.8
    };
    alienShips.push(alienShip);
  }
  // console.log(alienShips)

  const randomAlienShip =
    alienShips[Math.floor(Math.random() * alienShipNumber)];
  return randomAlienShip;
}
console.log(createAlienShips());

const aliens = createAlienShips();

//attack function considering the accuracy for each hit
function attack(attacker, target) {
  const hitAccuracy = Math.random();
  if (hitAccuracy < attacker.accuracy) {
    console.log(`${attacker.name} hit the target ${target.name}`);
    target.hull -= attacker.firepower;
    if (target.hull <= 0) {
      console.log(`${target.name} is destroyed`);
      if (target.name === name) {
        console.log("YOU LOST THE GAME")
        return;
      }
    }
    var confirmed = confirm("Do you want to attack again?");
    if (confirmed && attacker === USSAssembly) {
      console.log("YOU are attacking aliens");
      startBattle();
    } else if (confirmed && attacker === createAlienShips()) {
      console.log("Aliens are attacking YOU");
      attack(createAlienShips(), USSAssembly);
    } else {
      console.log("Hope you enjoyed the game!");
    }
  } else {
    console.log('%c You MISSED the ship' + ', ' + attacker.name, 'color: red; font-weight:bold');

    if (attacker !== name){
      console.log("now aliens attack ")
      attack(createAlienShips(), USSAssembly);
    } else {
      console.log("now YOU Assembly attack ")
      attack(USSAssembly, createAlienShips());
    }

  }
}

function startBattle() {
  // const aliens = createAlienShips();
  attack(USSAssembly, createAlienShips());
}

startBattle();
