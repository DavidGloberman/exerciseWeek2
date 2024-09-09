let mouse = document.getElementsByTagName("h1")[0];
mouse.onmouseover = mouseIn;
mouse.onmouseout = mouseOut;
mouse.onclick = Click;

function mouseIn() {
  mouse.innerText = "Mouse in";
}
function mouseOut() {
  mouse.innerText = "Mouse out";
}
function Click() {
  mouse.style.color = "red";
  mouse.style.backgroundColor = "yellow";
  mouse.style.textDecoration = "underline";
}
