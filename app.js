const lines = document.querySelectorAll(".line"); 
const burger = document.querySelector(".burger"); 
const subNav = document.querySelector(".sub-nav") 

burger.addEventListener("click", function() {
    lines[0].classList.toggle("lower");
    lines[2].classList.toggle("raise"); 
    lines[1].classList.toggle("hide")
    subNav.classList.toggle("return")
})