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

let slideactuel = 0
const slidetotal = 3
let bulletactuel = 0
const bullettotal = 3
let texteactuel = 0
const textetotal = 3
const texteBackground = [
	"Impressions tous formats <span>en boutique et en ligne</span>",
	"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	"Autocollants <span>avec découpe laser sur mesure</span>"
];

let flechedegauche = document.getElementById("flechegauche");
flechedegauche.addEventListener("click", function() {
	
	if (slideactuel > 0) {
		slideactuel--;
	} else {
		slideactuel = slidetotal;
	}
		changementBanniere ();
		changementBullet ();
		changementTexte ();
	
	console.log(cliquegauche);

});


let flechededroite = document.getElementById("flechedroite");
flechededroite.addEventListener("click", function() {
	
	if (slideactuel < slidetotal) {
		slideactuel++;
	} else {
		slideactuel = 0;
	}
		changementBanniere ();
		changementBullet ();
		changementTexte ();

	console.log(cliquedroit);
	
});

	//***** Fonction pour changer l'image du background ***** //

function changementBanniere () {
	let banniere = document.getElementById("banniere")
	banniere.setAttribute('src', 'assets/images/slideshow/slide' + (slideactuel + 1) + '.jpg');
	if (slideactuel === 3) {
		banniere.setAttribute('src', 'assets/images/slideshow/slide' + (slideactuel + 1) + '.png');
	}
}

//***** Fonction pour changer le bullet-point *******/

function changementBullet () {
	let bulletPoint = document.querySelectorAll(".dot");

	for (let bulletactuel = 0; bulletactuel < bullettotal; bulletactuel++) {

	if (bulletactuel === slideactuel) {
		bulletPoint.classlist.add("dot_selected");
	}
	else {
		bulletPoint.classlist.remove("dot_selected");
	}
  }
}

//***** Fonction pour le changement de texte ******/

function changementTexte () {
	let description = document.getElementById("description");

	for ( let texteactuel = 0; texteactuel < textetotal; texteBackground++) {
	description.innerHTML = texteBackground;
	}
}