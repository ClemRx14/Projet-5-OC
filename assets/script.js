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

let flechedegauche = document.getElementById("flechegauche");
flechedegauche.addEventListener("click", function() {
	
	if (slideactuel > 0) {
		slideactuel--;
		changementBanniere ();
		changementBullet ();
	}
	
	console.log(cliquegauche);

});


let flechededroite = document.getElementById("flechedroite");
flechededroite.addEventListener("click", function() {
	
	if (slideactuel < slidetotal) {
		slideactuel++;
		changementBanniere ();
		changementBullet ();
	}

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
	let bulletPoint = document.querySelector("dots")
	if (slideactuel === bulletactuel) {
		bulletPoint.classlist.add("dot_selected")
	}
	else {
		bulletPoint.classlist.remove("dot_selected")
	}
}