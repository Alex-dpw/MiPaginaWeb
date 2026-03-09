const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navlist");

toggle.addEventListener("click",()=>{
    nav.classList.toggle("active");
});

