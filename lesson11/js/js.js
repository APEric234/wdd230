var x = document.lastModified;
var y=document.getElementById("lastMod");
let navigator = document.getElementById('navigation')

function toggleMenu() {
  navigator.classList.toggle('responsive');
}
y.innerHTML = x;