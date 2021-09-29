/*var contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Votre message a été envoyé");
});
*/

var contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  contactForm.style.backgroundColor = "white";
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  contactForm.innerHTML = `Merci pour votre message ${firstName} ${lastName}.`;
  contactForm.style.fontFamily = "Lato, sans-serif";
  contactForm.style.justifyContent = "center";
});

