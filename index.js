//REGISTRATION FORM
//const Registration = document.getElementById("btn1")
function register() {
    var registerData = {
        names: document.getElementById("name").value,
        sname: document.getElementById("surname").value,
        emailAd: document.getElementById("email").value,
        Phone: document.getElementById("number").value,
        pin: document.getElementById("password").value,
        picture: document.getElementById("propic").files[0].name

        
        
    };
  
    var userRegistration = JSON.parse(localStorage.getItem("Users")) || [];
    if(!userRegistration.some(user => user.emailAd === registerData.emailAd)) {
        userRegistration.push(registerData);
        localStorage.setItem('Users', JSON.stringify(userRegistration));
        location.reload()
        console.log(registerData)
    }
    else{
        alert('email already registered')
    }
}

//login button
const Loginbtn = document.getElementById("btn2")
function login() {
    var UserDetails = JSON.parse(localStorage.getItem('UsersLogin')) || [];
    var userRegistration = JSON.parse(localStorage.getItem('Users')) || [];
    var LoginData = {
        loginName: document.getElementById('user').value,
        Password: document.getElementById('pass').value
    };
    var currentUser = userRegistration.filter(user => user.emailAd === LoginData.loginName);
    if(currentUser.length > 0) {
        
        if(currentUser[0].pin !== LoginData.Password) {
            alert('password do not match')
            return;
        }
        else{
            document.write();
            window.location.href="landingPage.html"
        }

    }
    else {
        alert('not registered email')
    }

  
}