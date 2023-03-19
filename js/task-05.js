    const input = document.querySelector('#name-input');
    const nameAnon = document.querySelector('#name-output')

    input.addEventListener('input', (event)=> {
        nameAnon.textContent = event.currentTarget.value;
        if(event.currentTarget.value === '') {
            nameAnon.textContent = 'Anonymous'
        }
    })