// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// 1. Object Literal
const fasterShip = {
  'Fuel Type': 'Turbo Fuel', // 'Fuel Type' has quotation marks because it contains a space character.
  color: 'silver',
};

//Accessing key value pairs of an object
const fuel = fasterShip['Fuel Type'];
console.log(fuel); // Turbo Fuel
console.log(fasterShip.color); //silver

// Mutating Objects
fasterShip['Fuel Type'] = 'Avocado oil';
fasterShip.color = 'gray';
console.log(fasterShip); //{Fuel Type: "Avocado oil", color: "gray"}

// 1. Invoking methods of objects
let retreatMessage =
  'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat: function () {
    // writing a method before ES6
    console.log(retreatMessage);
  },

  takeOff() {
    // writing a method after ES6
    console.log('Spin... Borp... Glix... Blastoff!');
  },
};

alienShip.retreat(); //invokes the method;
alienShip['takeOff()']; // doesn't invoke the method

// 2. Nested Objects
let spaceship = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() {
        console.log('You got this!');
      },
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() {
        console.log('I agree, captain!');
      },
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() {
        console.log('The tank is full!');
      },
    },
  },
};

// Write your code below to create a new array of objects with the crewsrole and crews name;
// eg. captain : Lily
const crewsOnly = []; // initialize an array to store objects.

// looping through the crew roles of given 'spaceship' object;
for (let crewMember in spaceship.crew) {
  // creating new empty object
  let obj = {};
  // set new objects key as crew role and name as value;
  obj[`${crewMember}`] = `${spaceship.crew[crewMember].name}`;
  //push this new object crewsOnly array.
  crewsOnly.push(obj);
  // console.log(`${crewMember} : ${spaceship.crew[crewMember].name}`);
}

console.log(crewsOnly); // [  { captain: Lily },  { 'chief officer': Dan },  { medic: Clementine },  { translator: Shauna }];

// Write your code below to create a new array of objects with the crew name and their degrees;
// eg. Lily : Computer Engineering
const crewsDegrees = [];
for (let crewGuy in spaceship.crew) {
  let obj = {};

  obj[spaceship.crew[crewGuy].name] = spaceship.crew[crewGuy].degree;
  crewsDegrees.push(obj);
  console.log(
    `${spaceship.crew[crewGuy].name} : ${spaceship.crew[crewGuy].degree}`
  );
}

console.log(crewsDegrees); // [ {Lily : 'Computer Engineering'}, { Dan : 'Aerospace Engineering' }, { Clementine : 'Physics' }, { Shauna : 'Conservation Science' } ]
