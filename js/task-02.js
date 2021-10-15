const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
console.log(listEl);

const arrayEl = ingredients.map(el => {
  const createListOfTagsForArrayElements = document.createElement('li');
  createListOfTagsForArrayElements.textContent = el;
  createListOfTagsForArrayElements.classList.add('item');
  return createListOfTagsForArrayElements;
});
listEl.append(...arrayEl);
