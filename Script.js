let btnRules = document.querySelector('.btn-rules');
let closeIcon = document.querySelector('.fa-close');
let rules = document.querySelector('.my-rules');

btnRules.addEventListener('click', function(){
    rules.style.display = 'block';
})
closeIcon.addEventListener('click', function(){
    rules.style.display = 'none';
})