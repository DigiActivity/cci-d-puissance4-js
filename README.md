# Fiche Pratique


Récupérer un élément dans le code HTML à partir de sa classe

`let monElement = document.querySelector('.laClasse')`

Récupérer un élément dans le code HTML à partir de son ID

`let monElement = document.querySelector('#identifiant')`

OU

`let monElement = document.getElementByID('identifiant')`

Créer un élément

`let monElement = document.createElement('div')`

Ajouter une classe

`monElement.classList.add('classe-a-ajouter')`

Ajouter un élément dans un autre

`monElementParent.appendChild(monElementEnfant)`

Répéter un bout de code X fois

```js

for(let i=0; i<7; i++){
    //le code ici se répètera 7 fois
}

```

