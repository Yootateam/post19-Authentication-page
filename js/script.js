const signinSec = document.getElementById('signin'),
    signupSec = document.getElementById('signup');
const imgLine = document.getElementById('line-img');
const signinBtn = document.getElementById("signin-btn"),
    signupBtn = document.getElementById("signup-btn");

const toggleSigninSec = ()=>{
    imgLine.classList.add("signin");
    imgLine.classList.remove("signup");
    signinSec.classList.remove("close");
    signupSec.classList.add("close");
}
const toggleSignupSec = ()=>{
    imgLine.classList.add("signup");
    imgLine.classList.remove("signin");
    signupSec.classList.remove("close");
    signinSec.classList.add("close");
}

signinBtn.addEventListener("click",toggleSigninSec);
signupBtn.addEventListener("click",toggleSignupSec);