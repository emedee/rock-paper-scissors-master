let btnRules = document.querySelector('.btn-rules');
let closeIcon = document.querySelector('.fa-close');
let bottomCloseIcon = document.querySelector('.close-icon');
let rules = document.querySelector('.my-rules');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let rockSelect = document.querySelector('.rock-select')
let paperSelect = document.querySelector('.paper-select')
let scissorsSelect = document.querySelector('.scissors-select')
let rockSelectHouse = document.querySelector('.rock-select-house')
let paperSelectHouse = document.querySelector('.paper-select-house')
let scissorsSelectHouse = document.querySelector('.scissors-select-house')
let mySelection = document.querySelector('.you-picked');
let content = document.querySelector('.content')
let content2 = document.querySelector('.content2');
let totalScore = document.querySelector('.count');
let result = document.querySelector('.show-result');
let secondResult = document.querySelector('.show-result-two');
let playAgain = document.querySelector('.btn-playAgain');
let playAgainTwo = document.querySelector('.btn-playAgain-two');
let loseOrWin = document.querySelector('.selected-result');
let loseOrWinTwo = document.querySelector('.selected-result-two');
let body = document.querySelector('.body')
let randomSelect = [rockSelectHouse, paperSelectHouse, scissorsSelectHouse]

function increaseCount(){
    var count = parseInt(document.querySelector('.count').value, 10);
    count = isNaN(count) ? 12 : count;
    count++;
    document.querySelector('.count').value = count;
    totalScore.innerHTML = count;  
}
function decreaseCount(){
    var count = parseInt(document.querySelector('.count').value, 10);
    count = isNaN(count) ? 12 : count;
    count--;
    document.querySelector('.count').value = count;
    totalScore.innerHTML = count;  
}
btnRules.addEventListener('click', function(){
    rules.style.display = 'block';
    body.style.display = 'none'
    var mq = window.matchMedia( "(max-width: 575.98px)" );
    if (mq.matches) {
        // window width is at less than 575.98px
        bottomCloseIcon.style.display = 'block'
    }
    else {
        // window width is greater than 575.98px
        bottomCloseIcon.style.display = 'none'
    }
})
closeIcon.addEventListener('click', function(){
    rules.style.display = 'none';
    body.style.display = 'block'
})
bottomCloseIcon.addEventListener('click', function(){
    rules.style.display = 'none';
    body.style.display = 'block'
})

rock.addEventListener('click', function(){
    rules.style.display = 'none';
    content.style.display = 'none';
    content2.style.display = 'flex';
    rockSelect.style.display = 'block';
    paperSelect.style.display = 'none';
    scissorsSelect.style.display = 'none';
    var test = randomSelect[Math.round(Math.floor(Math.random() * randomSelect.length))]
    test.style.display = 'block';
    if(test == paperSelectHouse){
        loseOrWin.innerHTML = 'YOU LOSE'
        loseOrWinTwo.innerHTML = 'YOU LOSE'
        rockSelectHouse.style.display = 'none'
        scissorsSelectHouse.style.display = 'none'
        decreaseCount();
    } else if (test == scissorsSelectHouse){
        loseOrWin.innerHTML = 'YOU WIN'
        loseOrWinTwo.innerHTML = 'YOU WIN'
        rockSelectHouse.style.display = 'none'
        paperSelectHouse.style.display = 'none'
        increaseCount();
    } else {
        loseOrWin.innerHTML = 'TIE'
        loseOrWinTwo.innerHTML = 'TIE'
        paperSelectHouse.style.display = 'none'
        scissorsSelectHouse.style.display = 'none'
    }
    var mq = window.matchMedia( "(max-width: 575.98px)" );
    if (mq.matches) {
        // window width is at less than 575.98px
        secondResult.style.display = 'block'
    }
    else {
        // window width is greater than 575.98px
        result.style.display = 'flex';
    }
})
paper.addEventListener('click', function(){
    rules.style.display = 'none';
    content.style.display = 'none';
    content2.style.display = 'flex';
    rockSelect.style.display = 'none';
    paperSelect.style.display = 'block';
    scissorsSelect.style.display = 'none';
    var test = randomSelect[Math.floor(Math.random() * randomSelect.length)]
    test.style.display = 'block';
    if(test == scissorsSelectHouse){
        loseOrWin.innerHTML = 'YOU LOSE'
        loseOrWinTwo.innerHTML = 'YOU LOSE'
        rockSelectHouse.style.display = 'none'
        paperSelectHouse.style.display = 'none'
        decreaseCount();
    } else if (test == rockSelectHouse){
        loseOrWin.innerHTML = 'YOU WIN'
        loseOrWinTwo.innerHTML = 'YOU WIN'
        paperSelectHouse.style.display = 'none'
        scissorsSelectHouse.style.display = 'none'
        increaseCount();
    } else {
        loseOrWin.innerHTML = 'TIE'
        loseOrWinTwo.innerHTML = 'TIE'
        scissorsSelectHouse.style.display = 'none'
        rockSelectHouse.style.display = 'none'
    }
    var mq = window.matchMedia( "(max-width: 575.98px)" );
    if (mq.matches) {
        // window width is at less than 575.98px
        secondResult.style.display = 'block'
    }
    else {
        // window width is greater than 575.98px
        result.style.display = 'flex';
    }
})
scissors.addEventListener('click', function(){
    rules.style.display = 'none';
    content.style.display = 'none';
    content2.style.display = 'flex';
    rockSelect.style.display = 'none';
    paperSelect.style.display = 'none';
    scissorsSelect.style.display = 'block';
    var test = randomSelect[Math.floor(Math.random() * randomSelect.length)]
    test.style.display = 'block';
    if(test == rockSelectHouse){
        loseOrWin.innerHTML = 'YOU LOSE'
        loseOrWinTwo.innerHTML = 'YOU LOSE'
        paperSelectHouse.style.display = 'none'
        scissorsSelectHouse.style.display = 'none'
        decreaseCount();
    } else if (test == paperSelectHouse){
        loseOrWin.innerHTML = 'YOU WIN'
        loseOrWinTwo.innerHTML = 'YOU WIN'
        rockSelectHouse.style.display = 'none'
        scissorsSelectHouse.style.display = 'none'
        increaseCount();
    } else {
        loseOrWin.innerHTML = 'TIE'
        loseOrWinTwo.innerHTML = 'TIE'
        rockSelectHouse.style.display = 'none'
        paperSelectHouse.style.display = 'none'
    }
    var mq = window.matchMedia( "(max-width: 575.98px)" );
    if (mq.matches) {
        // window width is at less than 575.98px
        secondResult.style.display = 'block'
    }
    else {
        // window width is greater than 575.98px
        result.style.display = 'flex';
    }
})
playAgain.addEventListener('click', function(){
    content.style.display = 'flex';
    content2.style.display = 'none';
    rules.style.display = 'none';
})
playAgainTwo.addEventListener('click', function(){
    content.style.display = 'flex';
    content2.style.display = 'none';
    rules.style.display = 'none';
    secondResult.style.display = 'none'
})