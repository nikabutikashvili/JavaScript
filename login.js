user1 = {
    username: "John2233",
    password: "1234"
};
user2 = {
    username: "Bob443",
    password: "2356"
};
user3 = {
    username: "Jack665",
    password: "7788"
};
user4 = {
    username: "Kate776",
    password: "998800022"
};
user5 = {
    username: "Nick887",
    password: "6644"
};

users = [user1, user2, user3, user4, user5];


function checkUsernameAndPassword(possibleUsername, possiblePassword) {
    let user = {
        username: '',
        password: ''
    }
    for (let i = 0; i < users.length; i++) {
        if(possibleUsername === users[i].username){
            user = users[i];
        }
    }
    if(!user.username) {
        alert("მომხმარებელი არ მოიძებნა");
    } else {
        if(possiblePassword === user.password) {
            if(user.password.length < 8) {
                alert("შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი");
                window.location.href = "index.html";
            } else {
                alert("შეხვედით სისტემაში წარმატებით");
                window.location.href = "index.html";
            }
        } else {
            alert("პაროლი არასწორია");
        }
    }
}

function logOn() {
    let possibleUsername = document.getElementById("username").value;
    let possiblePassword = document.getElementById("password").value;
    checkUsernameAndPassword(possibleUsername, possiblePassword);
}

let showPasswordButton = document.querySelector('#showPasswordButton');
let password = document.querySelector('#password');
showPasswordButton.addEventListener('click', function (e) {
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
});