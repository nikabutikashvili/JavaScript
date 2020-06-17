import {userData} from './users.js'
import {validateEmail, checkEmailAndPassword} from './validation.js'
const users = userData.getUsers();

document.querySelector('#logOn').addEventListener('click', function() {
    let possibleEmail = document.getElementById("email").value;
    let possiblePassword = document.getElementById("password").value;
    if(validateEmail(possibleEmail)) {
        checkEmailAndPassword(possibleEmail, possiblePassword, users);
    }
});

let showPasswordButton = document.querySelector('#showPasswordButton');
let password = document.querySelector('#password');
showPasswordButton.addEventListener('click', function (e) {
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
});




