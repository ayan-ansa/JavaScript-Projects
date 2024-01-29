const popup = document.getElementById("Popup");
const eyeicon = document.querySelector(".close");
const password = document.querySelector(".passBox");
eyeicon.onclick = function () {
  if (password.type =="password") {
    password.type="text";
    eyeicon.src="eye-open.png";
   } else {
      password.type = "password";
      eyeicon.src="eye-close.png";
  }
}
function openPopup() {
  popup.classList.add("open-Popup");
}
function closePopup() {
  popup.classList.remove("open-Popup");
}
