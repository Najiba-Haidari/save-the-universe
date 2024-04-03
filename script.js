var name = prompt("What is your name?");
// console.log(name);
const USSAssembly = {
  name: name,
  hull: Math.random() * 20,
  firepower: Math.random() * 7,
  accuracy: Math.random() * 0.7,
};
console.log("\n");
console.log(`${USSAssembly.name}, hull ${USSAssembly.hull}`);

// let number = Math.round(Math.random() * 6) + 6;
// console.log(number)

let alienShipNumber = 6;
let alienShips = [];

function createAlienShips() {
  // alienShips = [];
  // let randomAlienShip ;
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
    var confirmed = confirm ("Do you want to attack the next alien ship?");
      if (confirmed){
        USSAttack( USSAssembly, alienShips[0]);
      }else{
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

function alienAttack(attacker, target){
  const hitAccuracy = Math.random();
  if (hitAccuracy < target.accuracy){
    console.log(`Alien ship hit the target USS Assembly!`);
    console.log("%c You LOST the game", 'color: white; font-weight:bold; font-size:20px; background-color:red');
    return;
  }else{
    console.log("%c Aliens missed the USS Assembly!", 'color: blue; font-weight:bold; font-size:20px');
    console.log("\n");
    console.log("Now USS Assembly Attacks");
    USSAttack(USSAssembly, alienShips[0])
  }
}

// const aliens = createAlienShips();
// console.log(aliens)

//attack function considering the accuracy for each hit
// function attack(attacker, target) {
//   const hitAccuracy = Math.random();
//   if (hitAccuracy < attacker.accuracy) {
//     console.log(`${attacker.name} hit the target ${target.name}`);
//     alienShips.shift();
//     console.log(alienShips)
//     target.hull -= attacker.firepower;
//     if (target.hull <= 0) {
//       console.log(`${target.name} is destroyed`);
//       if (target.name === name) {
//         console.log("YOU LOST THE GAME")
//         return;
//       }
//     }
//     var confirmed = confirm("Do you want to attack again?");
//     if (confirmed && attacker === USSAssembly) {
//       console.log("YOU are attacking aliens \n");
//       startBattle();
//     } else if (confirmed && attacker === createAlienShips()) {
//       console.log("Aliens are attacking YOU \n");
//       attack(createAlienShips(), USSAssembly);
//     } else {
//       console.log("Hope you enjoyed the game! \n");
//     }
//   } else {
//     console.log('%c You MISSED the ship' + ', ' + attacker.name, 'color: blue; font-weight:bold');
//     // attack(createAlienShips(), USSAssembly);
//     if (attacker === USSAssembly){

//       console.log("now aliens attack \n")
//       attack(createAlienShips(), USSAssembly);
//     } 
//     else {
//       console.log("now YOU Assembly attack ")
//       attack(USSAssembly, createAlienShips());
//     }

//   }
// }

// function startBattle() {
//   // const aliens = createAlienShips();
//   attack(USSAssembly, createAlienShips());
// }

// startBattle();