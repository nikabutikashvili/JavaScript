user1 = {
    email: "John2233@mail.com",
    password: "1234"
};
user2 = {
    email: "Bob443@yahoo.com",
    password: "2356"
};
user3 = {
    email: "Jack665@mail.com",
    password: "7788"
};
user4 = {
    email: "Kate776@email.com",
    password: "Geolab12#$"
};
user5 = {
    email: "Nick887@mail.com",
    password: "6644"
};

users = [user1, user2, user3, user4, user5];


function checkEmailAndPassword(possibleEmail, possiblePassword) {
    let user = {
        email: '',
        password: ''
    }
    for (let i = 0; i < users.length; i++) {
        if(possibleEmail === users[i].email){
            user = users[i];
        }
    }
    if(!user.email) {
        alert("მომხმარებელი არ მოიძებნა");
    } else {
        if(possiblePassword === user.password) {
            CheckPassword(possiblePassword);    
        } else {
            alert("პაროლი არასწორია");
        }
    }
}

function logOn() {
    let possibleUsername = document.getElementById("email").value;
    let possiblePassword = document.getElementById("password").value;
    if(validateEmail()) {
        checkEmailAndPassword(possibleUsername, possiblePassword);
    }
}

let showPasswordButton = document.querySelector('#showPasswordButton');
let password = document.querySelector('#password');
showPasswordButton.addEventListener('click', function (e) {
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
});

function validateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
  {
    return true
  }
    alert("იმეილი არის არასწორ ფორმატში, გთხოვთ გაასწოროთ")
    return false
}

function CheckPassword(input) { 
    let password =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(input.match(password)) { 
    alert('შეხვედით სისტემაში წარმატებით')
    }
    else { 
    alert('შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი')
    }
}
