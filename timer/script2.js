const button = document.getElementById("copyButton");
function copypaste() {
  button.textContent = "✅ Хуулагдлаа";
}
function copyCode() {
  setTimeout(copypaste, 2000);
}
