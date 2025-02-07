

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

//Add event Listener to the eyeicon. 

eyeicon.addEventListener('click', fn => {

    //This is to check if the type = password which is hidden.

    if(password.type =="password"){
        password.type = "text";
        eyeicon.src = "images/eye.png";
    
    }else {
     password.type = "password";
     eyeicon.src = "images/hide.png";
    }
    
})