//const STORAGE_KEY = "feedback-form-state"
//const form = document.querySelector(".feedback-form");
//const textarea = form.querySelector('textarea');


//function formSubmitHandler(event){
//    event.preventDefault();
//    const text = textarea.value;
//    const name = form.elements.email.value;
//    const data = JSON.stringify({text, name}); 
//    localStorage.setItem(STORAGE_KEY, data);
 
//}
//form.addEventListener("submit", formSubmitHandler);

//const jsn = localStorage.getItem(STORAGE_KEY) ?? "";
//try{
//const data = JSON.parse(jsn);
//textarea.value = data.text;
//}
//catch {}
const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

//form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}



