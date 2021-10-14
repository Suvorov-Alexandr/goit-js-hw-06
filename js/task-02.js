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

ingredients.forEach(el => {
  const createListOfTagsForArrayElements = document.createElement('li');
  createListOfTagsForArrayElements.textContent = el;
  createListOfTagsForArrayElements.classList.add('item');
  listEl.appendChild(createListOfTagsForArrayElements);
});
