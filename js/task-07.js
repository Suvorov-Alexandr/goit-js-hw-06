const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.value = Number.parseInt(window.getComputedStyle(spanEl).fontSize);
inputEl.addEventListener('input', resizingInputValue);

function resizingInputValue() {
  spanEl.style.fontSize = `${this.value}px`;
}

// inputEl.addEventListener('input', changeValue);

// const inputEl = document.querySelector('#font-size-control');
// const spanEl = document.querySelector('#text');

// const changeValue = () => {
//   spanEl.style.fontSize = `${inputEl.value}px`;
// };

// changeValue();
// inputEl.addEventListener('input', changeValue);
