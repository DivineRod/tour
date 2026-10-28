const cel = document.getElementById("kettle");
let cele = 20;
let ison = false;
let timer = 0;
function coffee() {
  if (cele < 100) {
    cele += 20;

    cel.textContent = cele;
  } else {
    ison = false;
    clearInterval(timer);
  }
}

function turnOn() {
  if (ison === false) {
    ison = true;
    timer = setInterval(coffee, 1000);
  } else {
    ison = false;
    clearInterval(timer);
  }
}
