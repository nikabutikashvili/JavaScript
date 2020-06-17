function validateEmail(possibleEmail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(possibleEmail))
  {
    return true
  }
    alert("იმეილი არის არასწორ ფორმატში, გთხოვთ გაასწოროთ")
    return false
}

function checkEmailAndPassword(possibleEmail, possiblePassword, users) {
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
            checkPassword(possiblePassword);    
        } else {
            alert("პაროლი არასწორია");
        }
    }
}

function checkPassword(input) { 
    let password =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(input.match(password)) { 
    alert('შეხვედით სისტემაში წარმატებით')
    }
    else { 
    alert('შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი')
    }
}

export {validateEmail, checkEmailAndPassword};