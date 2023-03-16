const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`)

itemEl.forEach(elem => {
    const titleEl = elem.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`)

    const listEl = elem.querySelectorAll('li');
    console.log(`Elements: ${listEl.length}`)
})