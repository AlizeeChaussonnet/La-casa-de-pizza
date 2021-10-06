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

var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
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
    name: "HELSINKI",
    picture: "./src/Helsinki-perso.jpg"
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
// On stocke une référence vers l'interval lancé

let interval;

button.addEventListener('click', function(){
  // On stock le nombre de fois qu'une pizza est piochée
  let counter = 0;

  // Si un interval a déjà été lancé, on le stop
  if (interval) {
    clearInterval(interval);
  }

  // On lance l'interval qu'on stocke pour pouvoir l'arrêter plus tard
  interval = setInterval(
    function() {

      // Si on a pioché un pizza 15 fois, on stop l'interval
      
      if (counter >= 15) {
        clearInterval(interval);
      }
      let randomNbr = Math.floor(Math.random() * arrayPizza.length);
      const pizza = arrayPizza[randomNbr];
      professeur.src = pizza.picture;
      prenom.innerHTML = pizza.name;
      counter += 1;
    },
    200
  );
});

function scrollToForm() {
  document.querySelector('#contactForm').scrollIntoView({behavior: 'smooth'});
}

function scrollToMenu() {
  document.querySelector('#menu').scrollIntoView({behavior: 'smooth'});
}

function scrollToHistory() {
  document.querySelector('#container_history').scrollIntoView({behavior: 'smooth'});
}

function scrollToTop() {
  document.querySelector('#conteneur-image').scrollIntoView({behavior: 'smooth'});
}

// 


// Menu deroulant pizza mobile
let unfoldingC = document.querySelector(`#unfolding_classiques`);
let unfoldingS = document.querySelector(`#unfolding_signatures`);

unfoldingC.addEventListener('click', function(){
  let flexContainer = document.querySelector(`#container-classique`);
  flexContainer.classList.toggle("flex-container-animation");
  unfoldingC.classList.toggle("unfolding-open");
});

unfoldingS.addEventListener('click', function(){
  let flexContainer = document.querySelector(`#container-signatures`);
  flexContainer.classList.toggle("flex-container-animation");
  unfoldingS.classList.toggle("unfolding-open")
});

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}




