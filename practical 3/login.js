document.getElementById("loginForm").addEventListener("submit",function(event){
event.preventDefault();


let username=document.getElementById("username").value;
let password=document.getElementById("password").value;
let response=document.getElementById("response");

let usernameRegex=/^[A-Za-z0-9]+$/;

if(username===""||password===""){
    response.innerHTML="Please fill all fields";
    response.style.color="red";
    return;
}

if(!usernameRegex.test(username)){
    response.innerHTML="Username can contain only letters and numbers";
    response.style.color="red";
    return;
}

if(password.length<6){
    response.innerHTML="Password must be at least 6 characters";
    response.style.color="red";
    return;
}

response.innerHTML="Login Successful!";
response.style.color="green";

setTimeout(function(){
    window.location.href="home.html";
},1000);


});
