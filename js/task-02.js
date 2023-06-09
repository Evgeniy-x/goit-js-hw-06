const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients')

const createList = ingredients.map(name => {
  const itemEl = document.createElement('li');
  itemEl.textContent = name;
  itemEl.classList.add('item');

  return itemEl
});

listEl.append(...createList)