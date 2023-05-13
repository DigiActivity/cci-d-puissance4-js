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

// Réalisons le jeu :

// Au clic sur une colonne, on place une pièce (si il y a de la place)
// si il n'y a pas de place, on envoie un message dans la console

// Etape 1 : Sélectionner toutes les colonnes du plateau
// Etape 2 : Pour chaque colonne, attacher à celle-ci un EventListener "click"
// Etape 3 : L'action exécutée place une pièce ou écrit dans la console

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
			TOUR.change();
		}
	});
});
