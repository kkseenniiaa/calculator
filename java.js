let input = document.querySelector('#display');
let calc = document.querySelector('#calc');
let key1 = document.querySelectorAll('.key');
let result = document.querySelector('#result');
let reset = document.querySelector('#reset');

let exp = ""

for(let key of key1){
    key.addEventListener('click', (evt) => {
        evt.preventDefault();
        exp = exp + key.textContent;
        input.value = exp;
    })
}

result.addEventListener('click', (evt) => {
    exp = eval(input.value);
    input.value = exp;
    exp = ''
})

reset.addEventListener('click', (evt) => {
    evt.preventDefault();
    exp = '';
    input.value = '0'
})