const hamburger = document.querySelector(".hamburger");

const f = document.querySelectorAll(".right");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    f.forEach(element  => {
        f[0].classList.toggle("firstpart-right");
        f[1].classList.toggle("secondpart-right");
        f[2].classList.toggle("thirtpart-right");
    });
});


