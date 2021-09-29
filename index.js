/*var contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Votre message a été envoyé");
});
*/
function showResponsiveMenu() {
  let menu = document.getElementById("topnav_responsive_menu");
  let icon = document.getElementById("topnav_hamburger_icon");
  let root = document.getElementById("root");
  if (menu.className === "") {
      menu.className = "open";
      icon.className = "open";
      root.style.overflowY = "hidden";
  } else {
      menu.className = "";                    
      icon.className = "";
      root.style.overflowY = "";
  }
}

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

