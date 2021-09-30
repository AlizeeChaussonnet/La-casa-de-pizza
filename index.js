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
  contactForm.style.backgroundColor = "#111214";
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  contactForm.innerHTML = `Merci pour votre message ${firstName} ${lastName}.`;
  contactForm.style.color = "white";
  contactForm.style.fontFamily = "Lato, sans-serif";
  contactForm.style.justifyContent = "center";
});

// Déclaration des constantes
const professeur = document.querySelector("#image-selection");
const button = document.querySelector("#button-professeur")
const prenom = document.querySelector("#prenom");

const arrayPizza = [
  {
    name: "PROFESSEUR",
    picture: "./src/Professeur-perso.jpg"
  },
  {
    name: "TOKYO",
    picture: "./src/Tokyo-perso.jpg"
  },
  {
    name: "LISBONNE",
    picture: "./src/Lisbonne-perso.jpg"
  },
  {
    name: "BERLIN",
    picture: "./src/Berlin-perso.jpg"
  },
  {
    name: "RIO",
    picture: "./src/Rio-perso.jpg"
  },
  {
    name: "NAIROBI",
    picture: "./src/Nairobi-perso.jpg"
  },
  {
    name: "DENVER",
    picture: "./src/Denver-perso.jpg"
  },
  {
    name: "MOSCOU",
    picture: "./src/Moscou-perso.jpg"
  },
  {
    name: "STOCKHOLM",
    picture: "./src/Stockholm-perso.jpg"
  },
  {
    name: "PALERME",
    picture: "./src/Palerme-perso.jpg"
  },
  {
    name: "BOGOTA",
    picture: "./src/Bogota-perso.jpg"
  }
]

button.addEventListener('click', function(){
  setInterval(
    function() {
      let randomNbr = Math.floor(Math.random() *12);
      const pizza = arrayPizza[randomNbr];
      professeur.src = pizza.picture;
      console.log(pizza);
      prenom.innerHTML = pizza.name;
    
    },
    200
  );
})



/*function stopTextColor() {
  clearInterval(randomNbr);
  // release our intervalID from the variable
  randomNbr = null; 
}*/



