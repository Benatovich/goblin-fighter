// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
const killCounterEl = document.querySelector('#killed-number');
const heroHPEl = document.querySelector('#hero-hp');
const heroImgEl = document.querySelector('#hero-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');
const killedListEl = document.querySelector('.killed-list');
const worldEl = document.querySelector('main');
const gameOverEl = document.querySelector('body');

// let state
let killedGoblinsCount = 0;
let playerHP = 1;
let goblins = [
    { name: 'Harold', hp: 1 },
    { name: 'Captain Clara', hp: 4 },
];

heroHPEl.textContent = playerHP;

if (playerHP > 0) {
    heroImgEl.src = './assets/hero.png';
} else if (playerHP <= 0) {
    heroImgEl.src = './assets/dead-goblin.png';
}

// new goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // user has supplied a name and submitted the form
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    // make a new goblin object with that user input
    // const newGoblin = {
      //     name: goblinName,
      //     hp: Math.ceil(Math.random() * 5),
      // };
    // TESTING SOMETHING NEW HERE
    const newGoblin = {
        name: (goblinName === '') ? `Goblin #${Math.floor(Math.random() * 5000)}` : goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
    // add that object to the array of goblins in state
    goblins.push(newGoblin);

    displayGoblins();
});

function displayGoblins() {
    // 'update a list'
    // clear out the list DOM
    goblinListEl.textContent = '';

    // loop through the goblins
    for (let goblin of goblins) {

      // render a new goblin DOM element for each item
        const goblinEl = renderGoblin(goblin);

      // append that element to the HTML
        goblinListEl.append(goblinEl);

      // since we have a goblin element, we can make each goblin clickable
        // this is a DYNAMIC EVENT LISTENER. we make a new one for every goblin
        // event listeners are properties just like text content or style. we add it to elements.
        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {
              // each goblin is clickable
              // on click, possibly decrement the goblin's HP
              // TEST CODE BELOW
                // if (Math.random() < 1) {
                if (Math.random() < .33) {
                    goblin.hp--;
                    displayGoblins();
                    alert('You\'ve injured ' + goblin.name + '!');
                } else {
                    alert(goblin.name + ' defended themselves!');
                }
                  // possibly decrement player HP TEST CODE BELOW
                // if (Math.random() < .1) {
                if (Math.random() < .5) {
                    playerHP--;
                    alert('You\'ve been struck by ' + goblin.name + '\'s counterattack!');
                } else {
                    alert('You blocked ' + goblin.name + '\'s counterattack!');
                }

                if (goblin.hp === 0) {
                    killedGoblinsCount++;
                    alert('You killed ' + goblin.name + '!');
                    killedListEl.append(`${goblin.name}, `);
                    killedListEl.style.backgroundImage = "url('./assets/jake-background.jpg')";
                }
                
                if (playerHP === 0) {
                    heroImgEl.classList.add('game-over');
                    alert('GAME OVER');
                    worldEl.style.visibility = 'hidden';
                    gameOverEl.style.backgroundImage = "url('./assets/jake-background.jpg')";
                    gameOverEl.classList.add('game-over');
                    gameOverEl.textContent = `Your reign of terror has finally come to an end!  You\'ll get \'em next time, pal.`;
                    // killCounterEl.style.visibility = 'hidden';
                    // heroHPEl.style.visibility = 'hidden';
                    // form.style.visibility = 'hidden';
                    // goblinListEl.style.visibility = 'hidden';
                    // killedListEl.style.visibility = 'hidden';
                    // hero.style.visibility = 'hidden';
                }
                  // update DOM with new goblin/player/defeated goblin state
                heroHPEl.textContent = playerHP;
                killCounterEl.textContent = killedGoblinsCount;

                displayGoblins();
            });
        }
        
        goblinListEl.append(goblinEl);     
    }
}

if (worldEl.style.visibility === 'hidden') {
    gameOverEl.style.backgroundImage = "url('./assets/jake-background.jpg')";
}

displayGoblins();