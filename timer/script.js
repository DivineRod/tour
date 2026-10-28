const s = document.getElementById("status");
function sended() {
  s.textContent = "✅ Илгээгдлээ";
}
function sendMessage() {
  s.textContent = "	Илгээх · шууд	";
  setTimeout(sended, 2000);
}
