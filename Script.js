let btnRules = document.querySelector('.btn-rules');
let closeIcon = document.querySelector('.fa-close');
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
let result = document.querySelector('.show-result');
let playAgain = document.querySelector('.btn-playAgain');
let loseOrWin = document.querySelector('.selected-result');
let randomSelect = [rockSelectHouse, paperSelectHouse, scissorsSelectHouse]

btnRules.addEventListener('click', function(){
    rules.style.display = 'block';
})
closeIcon.addEventListener('click', function(){
    rules.style.display = 'none';
})

rock.addEventListener('click', function(){
    content.style.display = 'none';
    content2.style.display = 'flex';
    rockSelect.style.display = 'block';
    paperSelect.style.display = 'none';
    scissorsSelect.style.display = 'none';
    var test = randomSelect[Math.floor(Math.random() * randomSelect.length)]
    test.style.display = 'block';
    if(test == paperSelectHouse){
        loseOrWin.innerHTML = 'YOU LOSE'
    } else if (test == scissorsSelectHouse){
        loseOrWin.innerHTML = 'YOU WIN'
    } else {
        loseOrWin.innerHTML = 'TIE'
    }
    result.style.display = 'flex';
})
paper.addEventListener('click', function(){
    content.style.display = 'none';
    content2.style.display = 'flex';
    rockSelect.style.display = 'none';
    paperSelect.style.display = 'block';
    scissorsSelect.style.display = 'none';
    var test = randomSelect[Math.floor(Math.random() * randomSelect.length)]
    test.style.display = 'block';
    if(test == scissorsSelectHouse){
        loseOrWin.innerHTML = 'YOU LOSE'
    } else if (test == rockSelectHouse){
        loseOrWin.innerHTML = 'YOU WIN'
    } else {
        loseOrWin.innerHTML = 'TIE'
    }
    result.style.display = 'block';
})
scissors.addEventListener('click', function(){
    content.style.display = 'none';
    content2.style.display = 'flex';
    rockSelect.style.display = 'none';
    paperSelect.style.display = 'none';
    scissorsSelect.style.display = 'block';
    var test = randomSelect[Math.floor(Math.random() * randomSelect.length)]
    test.style.display = 'block';
    if(test == rockSelectHouse){
        loseOrWin.innerHTML = 'YOU LOSE'
    } else if (test == paperSelectHouse){
        loseOrWin.innerHTML = 'YOU WIN'
    } else {
        loseOrWin.innerHTML = 'TIE'
    }
    result.style.display = 'flex';
})
playAgain.addEventListener('click', function(){
    location.reload();
})