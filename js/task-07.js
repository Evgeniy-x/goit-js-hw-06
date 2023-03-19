const input = document.querySelector('#font-size-control');
const table = document.querySelector('#text');

table.style.fontSize = `${input.value}px`

input.addEventListener('input', ()=> {
    table.style.fontSize = `${input.value}px`
})
