const mots = ["PERMIS MOTO", "INITIATION 125CM3", "PERMIS AM", "PASSERELLE A2>A"];
const vitesse = 100; // en millisecondes

const affichage = document.querySelector(".change-word");

let index = 0;

function afficherMot() {
  const mot = mots[index];
  let i = 0;

  const interval = setInterval(function() {
    affichage.textContent += mot[i];
    i++;

    if (i === mot.length) {
      clearInterval(interval);

      setTimeout(function() {
        effacerMot();
      }, 1000);
    }
  }, vitesse);

  index = (index + 1) % mots.length;
}

function effacerMot() {
  let i = affichage.textContent.length;
  const interval = setInterval(function() {

    affichage.textContent = affichage.textContent.slice(0, i-1);
    i--;

    if (i === 0) {
      clearInterval(interval);

      setTimeout(function() {
        afficherMot();
      }, 1000);
    }
  }, vitesse);
}

console.log(affichage === " ");

if(affichage === null) {
  affichage.style.borderRight = "red"
}

afficherMot();
