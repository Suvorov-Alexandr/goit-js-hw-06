const numberOfCategories = document.querySelector('#categories');
console.log('Number of categories:', numberOfCategories.children.length);

const categoryNameAndNumberOfItems = document.querySelectorAll('.item');
categoryNameAndNumberOfItems.forEach(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Elements:', el.lastElementChild.querySelectorAll('li').length);
});
