const btn = document.getElementById("button");
const form = document.getElementById("form");
const popupContainer = document.getElementById("popup-container");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  btn.value = "Sending...";
  const serviceID = "service_wqu1utk";
  const templateID = "template_mhfux6l";
  emailjs
    .sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = "Send Email";
      showSuccessPopup();
    })
    .catch((err) => {
      btn.value = "Send Email";
      showErrorPopup(err);
    });
});
function showSuccessPopup() {
  const popup = document.createElement("div");
  popup.classList.add("success-popup");
  popup.textContent = "Email sent successfully!";
  popupContainer.appendChild(popup);
  setTimeout(() => {
    popup.remove();
  }, 3000);
}
function showErrorPopup(err) {
  const popup = document.createElement("div");
  popup.classList.add("error-popup");
  popup.textContent = "Error sending email: " + err.message;
  popupContainer.appendChild(popup);
  setTimeout(() => {
    popup.remove();
  }, 3000);
}
