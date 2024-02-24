const popup = document.getElementById("Popup");
const eyeicon = document.querySelector(".close");
const password = document.querySelector(".passBox");
eyeicon.onclick = function () {
  if (password.type =="password") {
    password.type="text";
    eyeicon.src="images/eye-open.png";
   } else {
      password.type = "password";
      eyeicon.src="images/eye-close.png";
  }
}
function openPopup() {
  popup.classList.add("open-Popup");
}
function closePopup() {
  popup.classList.remove("open-Popup");
}
