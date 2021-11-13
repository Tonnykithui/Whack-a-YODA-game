
const scoreBoard = document.querySelector('.score');
const timeBoard = document.querySelector('.timeout');
const startBtn = document.querySelector('.startButton');
const moles = document.querySelectorAll('.mole');
const holes = document.querySelectorAll('.box');


let currentHole;
let score = 0;
let timeUp = false;
let timeLeft = 20000;


function pickholeRandom(holes){
    const hole = Math.floor(Math.random() * holes.length);

    if(hole === currentHole) pickholeRandom(holes);
    currentHole = hole;
    return hole;
}

function popOut(){
    const time = Math.floor(Math.random() * 1300 + 200);
    const hole = pickholeRandom(holes);
    const sethole = holes[hole];

    sethole.classList.add('up');
    setTimeout(() => {
        sethole.classList.remove('up');
        if(!timeUp) popOut();
    }, time);

}


startBtn.addEventListener('click', () => {
    let countDown = timeLeft / 1000;
    timeBoard.textContent = countDown;

    setInterval(() => {
        countDown -= 1;
        if(countDown >= 0){
            timeBoard.textContent = countDown;
        } else {
            timeUp = true;
            timeBoard.textContent = 'THANK-U FOR SAVING EARTH'
        }
    }, 1000);

    if(!timeUp){
        popOut();
    }

})

moles.forEach(mole  =>{ mole.addEventListener('click', whack)});

function whack(e) {
    score++;
    scoreBoard.textContent = score
    this.style.backgroundImage = 'url("images/yoda222.jpg")';
    setInterval(() => {
        this.style.backgroundImage = 'url("images/babyyoda.png")';
    }, 800);
    console.log(score);
}