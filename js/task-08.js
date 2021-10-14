const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const formData = {};
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Все поля должны быть заполнены!');
    return;
  }

  const formValue = new FormData(this);
  formValue.forEach((value, name) => {
    formData[name] = value;
  });
  console.log(formData);
  //   console.log({ email: email.value, password: password.value });
  form.reset();
}
