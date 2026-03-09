const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navlist");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});