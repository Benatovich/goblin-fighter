// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
const killCounterEl = document.querySelector('#killed-number');
const killedListEl = document.querySelector('.killed-list');
const heroHPEl = document.querySelector('#hero-hp');
const heroImgEl = document.querySelector('#hero-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let killedGoblinsCount = 0;
let playerHP = 1;
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
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
    // add that object to the array of goblins in state
    goblins.push(newGoblin);

    displayGoblins();
});

function displayGoblins() {
    // 'update a list'
    // clear out the list DOM

    // loop through the goblins

    // render a new goblin DOM element for each item

      // append that element to the HTML


    // since we have a goblin element, we can make each goblin clickable
    // this is a DYNAMIC EVENT LISTENER. we make a new one for every goblin
    // event listeners are properties just like text content or style. we add it to elements.
 
      // each goblin is clickable
      // on click, possibly decrement the goblin's HP

      // possibly decrement player HP


    // update DOM with new goblin/player/defeated goblin state
}