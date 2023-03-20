const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
    event.preventDefault();

    const { email, password }  = event.currentTarget.elements;

    if(email.value === '' || password.value === '') {
        return alert('Заповніть всі поля!');
    }
  
  const obj = {
      email: email.value,
      password:password.value
    }
  console.log(obj)
  // console.log(`Login: ${email.value}, Password: ${password.value}`);
  
  event.currentTarget.reset();
}; 