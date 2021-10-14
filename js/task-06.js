const inputEl = document.querySelector('#validation-input');
const requiredLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', () => {
  inputEl.value.length === requiredLength
    ? inputEl.classList.remove('invalid') & inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
});
