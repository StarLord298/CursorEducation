const message = document.querySelector(".message");

function plusMessage() {
  message.style.display = "block";
}

setInterval(plusMessage, 10000);
