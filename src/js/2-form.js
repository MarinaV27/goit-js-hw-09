const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onInputData);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(event) {
  dataForm = { email: email.value.trim(), message: message.value.trim()};
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value.trim(), message: message.value.trim() });

  if (email.value === '' || message.value === '') 
  return ;

  localStorage.removeItem(LOCAL_KEY);
  event.currentTarget.reset();
  dataForm = {};
}



  