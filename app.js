// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
const killCounterEl = document.querySelector('#killed-number');
const heroHPEl = document.querySelector('#hero-hp');
const heroImgEl = document.querySelector('#hero-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');
const killedListEl = document.querySelector('.killed-list');

// let state
let killedGoblinsCount = 0;
let playerHP = 10;
let goblins = [
    { name: 'Harold', hp: 1 },
    { name: 'Captain Clara', hp: 4 },
];

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
                    alert(goblin.name + ' attacked you in self-defense!');
                } else {
                    alert(goblin.name + ' tried to defend themselves but failed!');
                }

                if (goblin.hp === 0) {
                    killedGoblinsCount++;
                    alert('you killed ' + goblin.name + '!');
                    killedListEl.append(`${goblin.name}, `);
                    killedListEl.style.backgroundColor = 'rebeccapurple';
                }
                
                if (playerHP === 0) {
                    heroImgEl.classList.add('game-over');
                    alert('YOUR REIGN OF TERROR HAS ENDED');
                    alert('GAME OVER');
                }
                  // update DOM with new goblin/player/defeated goblin state
                heroHPEl.textContent = playerHP;
                killCounterEl.textContent = killedGoblinsCount;

                displayGoblins;
            });
        }
        
        goblinListEl.append(goblinEl);     
    }
}

displayGoblins();