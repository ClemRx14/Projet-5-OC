const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/////**** ajout des event Listeners ****/////
let cliquegauche = "vous avez cliqué à gauche"
let cliquedroit = "vous avez cliqué à droite"

// **** variables concernant les slides *****//

let slideActuel = 0
const slideTotal = 3
const bulletTotal = 4
const tabData = slides

let flechedegauche = document.getElementById("flechegauche");
flechedegauche.addEventListener("click", function() {
	
	if (slideActuel > 0) {
		slideActuel--;
	} else {
		slideActuel = slideTotal;
	}
		changementBanniere ();
		changementBullet ();
		changementTexte ();
	
	console.log(cliquegauche);
});


let flechededroite = document.getElementById("flechedroite");
flechededroite.addEventListener("click", function() {
	
	if (slideActuel < slideTotal) {
		slideActuel++;
	} else {
		slideActuel = 0;
	}
		changementBanniere ();
		changementBullet ();
		changementTexte ();

	console.log(cliquedroit);
});

	//***** Fonction pour changer l'image du background ***** //

function changementBanniere () {
	let banniere = document.getElementById("banniere")
	banniere.setAttribute('src', 'assets/images/slideshow/' + tabData[slideActuel].image);
}

//***** Fonction pour changer le bullet-point *******/

function changementBullet () {
	let bulletPoint = document.querySelectorAll(".dot");

	for (let bulletActuel = 0; bulletActuel < bulletTotal; bulletActuel++) {
		let newBullet = bulletPoint[bulletActuel];

	if (bulletActuel === slideActuel) {
		newBullet.classList.add("dot_selected");
	}
	else {
		newBullet.classList.remove("dot_selected");
	}
  }
}

//***** Fonction pour le changement de texte ******/

function changementTexte () {
	let description = document.getElementById("description");
	description.innerHTML = tabData[slideActuel].tagLine;
}