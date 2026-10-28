const park = document.getElementById("parking");
const meter = document.getElementById("meter");
const enter = document.getElementById("enterButton");
const leaveButton = document.getElementById("leaveButton");
let fee;

let here = false;

let timer = 0;
let minute = 0;

function enter() {
  if (here === false) {
    here = true;
    timer = setInterval(parking, 1000);
  } else {
    park.textContent = "🚗 Зогсоолд байна";
    meter.textContent = "${minute}";
    here = false;
  }
}
function leave() {
  clearInterval(timer);
  
}
