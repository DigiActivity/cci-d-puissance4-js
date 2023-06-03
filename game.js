/*
let colonneUn = document.querySelectorAll('div.colonne:nth-of-type(1) div.case');
console.log(colonneUn)

console.log(colonneUn[5])


let colonne = document.querySelector('div.colonne');

let listeCase = colonne.querySelectorAll('div.case');

console.log(colonne);
console.log(listeCase);

*/

function caseDispo(colonne) {
	// sélectionner toutes les cases de colonne :
	let toutesLesCases = colonne.querySelectorAll("div.case");
	// toutesLesCases : [div.case, div.case, div.case, div.case, ...]

	/**
	 * RAPPEL : Comment différencier une case vide d'une case qui contient une pièce
	 *
	 * Toutes les cases sont au format div.case par exemple <div class="case"></div>
	 * Pour colorer une case (pour lui une apparence de pièce), on ajoute simplement la classe "rouge" ou "jaune"
	 * Donc par exemple, une case jaune : <div class="case jaune"></div>
	 *
	 * DONC, on peut savoir rapidement si c'est une case vide ou une pièce,
	 * simplement en comptant le nombre de classes.
	 */

	// On parcoure le tableau de bas en haut et on cherche la première case vide
	let longueurTableau = toutesLesCases.length;

	for (let i = longueurTableau - 1; i >= 0; i = i - 1) {
		// vérifier que toutesLesCases[i] est vide
		// si oui, le retourner (le renvoyer)
		// si non, continuer (ne rien faire)
		let caseActuelle = toutesLesCases[i];

		if (caseActuelle.classList.length == 1) {
			return caseActuelle;
		}
	}

	// si on arrive ici, c'est que la colonne est pleine
	return null;
}

let TOUR = {
	jaune: true,
	change: function () {
		this.jaune = !this.jaune;

		visuel = document.querySelector("#tour-visuel");
		if (this.jaune) {
			visuel.innerHTML = "jaunes";
			visuel.style.color = "gold";
		} else {
			visuel.innerHTML = "rouge";
			visuel.style.color = "red";
		}
	},
};


let toutesMesColonnes = document.querySelectorAll("div.colonne");

toutesMesColonnes.forEach((colonne) => {
	colonne.addEventListener("click", () => {
		// TODO: code qui s'exécutera à chaque clic sur une colonne
		dispo = caseDispo(colonne);
		if (dispo !== null) {
			if (TOUR.jaune) {
				dispo.classList.add("jaune");
			} else {
				dispo.classList.add("rouge");
            }
            verifieVictoire(colonne, dispo)
			TOUR.change();
		}
	});
});


function verifieVictoire (colonneActuelle, piece) {
    console.log("Je vérifie la victoire");
	console.log(colonneActuelle)
	console.log(piece)

	/* Pour vérifier la victoire j'ai besoin de la position de ma pièce dans la colonne */

	// Etape 1, je vais chercher toutes les pièces pour pouvoir retrouver la bonne
	const toutesLesPieces = colonneActuelle.querySelectorAll('div.case')

	// Etape 2, je commence la recherche. Je prévois
	let position = -1;
	
	toutesLesPieces.forEach((unePiece, positionPiece) => {
		if (unePiece === piece) {
			position = positionPiece
			return
		}
	})
	console.log('Ma pièce est la la position ' + position)

	/* commencer à vérifier les valeurs adjacentes */

	// Vérifions les cases à Position + N
	const nbDeCaseApres = toutesLesPieces.length - (position + 1)
	console.log("Il y a " + nbDeCaseApres + " cases après notre cellule")

	let compteur = 1

	let casesApresVerifiees = 0

	while (casesApresVerifiees < nbDeCaseApres) {
		casesApresVerifiees++
		
		const positionAVerifier = position + casesApresVerifiees
		console.log("On vérifie la case " + positionAVerifier)

		if (piece.className === toutesLesPieces[positionAVerifier].className) {
			compteur ++
		} else {
			break
		}
	}

	if (compteur >= 4) {
		//victoire
		if (TOUR.jaune) {
			alert("Victoire des jaunes")
		} else {
			alert("Victoire des rouges")
		}
	}
}
