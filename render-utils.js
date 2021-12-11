export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const img = document.createElement('img');

    if (goblinData.hp > 0) {
        img.src = './assets/goblin.png';
    } else {
        img.src = './assets/dead-goblin.png';
    }

    goblinEl.classList.add('goblin');
    faceEl.classList.add('face');
    nameEl.classList.add('name');
    hpEl.classList.add('hp');
    img.classList.add('goblin-img');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    // use a "ternary" to set the face
    // if the goblin lives, do an imp emoji; else do a fire emoji
    faceEl.textContent = goblinData.hp > 0 ? '😈' : '💀';

    if (goblinData.hp <= 0) {
        goblinEl.classList.add('dead');
        // goblinEl.remove(img);
    }

    goblinEl.append(nameEl, faceEl, hpEl, img);

    return goblinEl;
}