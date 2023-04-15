// Créer le plateau de jeu dans <div class="plateau"> :
// 7 colonnes (div.colonne) qui contiennent chacune 6 cases (div.case)

const LARGEUR = 7; //le nombre de colonnes
const HAUTEUR = 6; //le nombre de cases par colonne
const plateau = document.querySelector('.plateau');
const formulaire = document.querySelector('form');

formulaire.addEventListener('submit', (event) => {
    event.preventDefault()
    // récupérer les valeurs du form
    let formElements = formulaire.elements

    let L = formElements.largeur.value 
    let H = formElements.hauteur.value
    console.log(L, H)
    
    plateau.innerHTML = ""

    for(let i = 0; i < L; i++){
        //générer une div colonne
        let colonne = document.createElement('div');
        colonne.classList.add("colonne");
        
        for(let j = 0; j < H; j++){
            
            let maCase = document.createElement('div');
            maCase.classList.add("case");
    
            colonne.appendChild(maCase);
        }
    
        //l'insérer dans le plateau
        plateau.appendChild(colonne);
    }

})

/*
La boucle for :
- Initialiser une valeur
- Donner la vérification de la boucle
- Préciser l'incrémentation de la valeur
*/

for(let i = 0; i < LARGEUR; i++){
    //générer une div colonne
    let colonne = document.createElement('div');
    colonne.classList.add("colonne");
    
    for(let j = 0; j < HAUTEUR; j++){
        
        let maCase = document.createElement('div');
        maCase.classList.add("case");

        colonne.appendChild(maCase);
    }

    //l'insérer dans le plateau
    plateau.appendChild(colonne);
}