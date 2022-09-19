const form = document.getElementById("form");  
 const username = document.getElementById("username");  
 const email = document.getElementById("email");  
 const password = document.getElementById("password");  
 const cPassword = document.getElementById("c-password");  
 //Función para mostrar mensaje de error en caso de que hubiera alguno al rellenar el formulario de ingreso
 function showError(input, message) {  
  const formControl = input.parentElement;  
  formControl.className = "input error";  
  const small = formControl.querySelector("small");  
  small.innerText = message;  
 }  
 // Función de formulario enviado con éxito
 function showSuccess(input) {  
  const formControl = input.parentElement;  
  formControl.classList.add("success");  
 }  
 //Verificar los campos requeridos
 function checkRequired(inputArr) {  
  inputArr.forEach(function (input) {  
   if (input.value.trim() === "") {  
    showError(input, `${getFieldName(input)} is required`);  
   } else {  
    showSuccess(input);  
   }  
  });  
 }  
 // función para obtener el campo 
 function getFieldName(input) {  
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);  
 }  
 // Funcón para verificar la longitud de la contraseña
 function checkLenghth(input, min, max) {  
  if (input.value.length < min) {  
   showError(  
    input,  
    `${getFieldName(input)} debe contener mínimo ${min} caracteres `  
   );  
  } else if (input.value.length > max) {  
   showError(  
    input,  
    `${getFieldName(input)} debe contener menos de  ${max} caracteres `  
   );  
  } else {  
   showSuccess(input);  
  }  
 }  
 // Función para verificar si el eMail es válido 
 function checkEmail(input) {  
  const re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;  
  if (re.test(input.value.trim())) {  
   showSuccess(input);  
  } else {  
   showError(input, "Email inválido");  
  }  
 }  
 // Función para verificar si coinciden las contrseñas
 function checkPasswordMatch(input1, input2) {  
  if (input1.value !== input2.value) {  
   showError(input2, "Las contraseñas no coinciden");  
  }  
 }  
 form.addEventListener("submit", (e) => {  
  e.preventDefault();  
  checkRequired([username, email, password, cPassword]);  
  checkLenghth(username, 3, 15);  
  checkLenghth(password, 8, 25);  
  checkEmail(email);  
  checkPasswordMatch(password, cPassword);  
 });  