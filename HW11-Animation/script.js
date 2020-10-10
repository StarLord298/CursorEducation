const hamburger = document.querySelector(".hamburger");
const first = document.querySelector("#first-right");
const second = document.querySelector("#second-right");
const thirt = document.querySelector("#thirt-right");




hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    first.classList.toggle("firstpart-right");
    second.classList.toggle("secondpart-right");
    thirt.classList.toggle("thirtpart-right");
});


