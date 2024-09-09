let colorDiv = document.getElementById("my-div");
const selectColor = document.getElementById("select-color");
const buttonHide = document.getElementsByTagName("button")[0];
const FormColor = document.getElementsByTagName("form")[0];

selectColor.addEventListener("change", function () {
  colorDiv.style.backgroundColor = selectColor.value;
});

buttonHide.addEventListener("click", function () {
  if (buttonHide.innerText === "hide element") {
    colorDiv.remove();
    buttonHide.innerText = "discover element";
  } else if (buttonHide.innerText === "discover element") {
    colorDiv = document.createElement("div");

    colorDiv.innerText = "this is my div";
    colorDiv.id = "my-div";
    colorDiv.style.backgroundColor = selectColor.value;

    document.body.appendChild(colorDiv);
    buttonHide.innerText = "hide element";
  }
});

FormColor.addEventListener("submit", function (event) {
  event.preventDefault();

  const newOption = document.createElement("option");

  const newColor = document.getElementById("color").value;
  newOption.value = newColor;
  newOption.innerText = newColor;
  colorDiv.style.backgroundColor = newColor;
  selectColor.change = newColor;

  selectColor.appendChild(newOption);
  FormColor.reset();
});
