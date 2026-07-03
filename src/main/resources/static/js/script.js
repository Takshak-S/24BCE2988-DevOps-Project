// Mobile Menu

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if(menu){
    menu.addEventListener("click",()=>{
        nav.classList.toggle("active");
    });
}

// Countdown

const eventDate = new Date("March 25, 2027 09:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    if(document.getElementById("days")){

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

    }

},1000);

// Registration Form Validation

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;

if(name==="" || email===""){
    alert("Please fill all required fields.");
    return;
}

alert("Registration Successful!");

form.reset();

});

}