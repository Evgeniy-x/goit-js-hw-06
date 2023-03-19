const decrement = document.querySelector('[data-action=decrement]');
const increment = document.querySelector('[data-action=increment]');
const table = document.querySelector('#value');

let counterValue = 0;

decrement.addEventListener('click', ()=> {
    table.textContent = counterValue -= 1;
});

increment.addEventListener('click', ()=> {
    table.textContent = counterValue += 1;
});