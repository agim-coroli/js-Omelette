import Ingredient from "./classes.js";
import {personne, maison, couteau, poele, bol} from "./objets.js"

// instanciation de la classe Ingredient 
let oignon = new Ingredient ("oignon", "entier", 1);
let oeuf = new Ingredient ("oeufs", "entier", 2);
let epice = new Ingredient ("poivre", "moulu", 1);
let fromage = new Ingredient ("fromage", "entier", 3);

let panier1;
let panier2;
// Créer un lieu "epicerie" qui a comme propriétés :
// >- nom, personnes = [], paniers (plusieurs objets paniers avec le type de panier et le contenu du panier),
// >- Les "ingrédients" créés juste au dessus contenus dans un tableau.
let epicerie = {
    nom : "l'épicerie",
    personnes : [],
    panier: [
        panier1={
            nom: "panier1",
            contenu: []
        },
        panier2= {
            nom: "panier2",
            contenu: []
        }
    ],
    ingredients : [oignon, oeuf, epice, fromage],
}




// DEBUT DE L'OMELETTE
// 1. Pour dire que le personnage est à la maison :
// 1. Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :
personne.seDeplacer(maison);
console.log(`${personne.nom} part vers ${epicerie.nom}`);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
personne.seDeplacer(epicerie);

// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.
personne.mainDroite = epicerie.panier[0];
epicerie.panier.shift();
console.log(`${personne.nom} a pris un panier`);

// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
// Afficher un message à chaque ingrédient pris
for (let i = 0; i < epicerie.ingredients.length; i++){
    personne.mainDroite.contenu.push(epicerie.ingredients[i])
    console.log(`${personne.nom} a pris ${personne.mainDroite.contenu[i].nom}`);
}

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
// Afficher un message de ce qu'il reste d'argent sur le personnage.
personne.payerArticle();
console.log(`${personne.nom} a ${personne.argent} euros`);

// rentrer à la maison (comme ça on pourra cuisiner)
personne.seDeplacer(maison);

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
bol.mixer()

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
console.log(`j'ai oublié de laisser le panier à ${epicerie.nom}, je repart`);
personne.seDeplacer(epicerie);

epicerie.panier.push(personne.mainDroite)
console.log(`Il y a maintenant en ${epicerie.panier.length} paniers en stock  à ${epicerie.nom}`);
personne.mainDroite = ""
// console.log(personne.mainDroite);

// Retourner à la maison pour continuer l'omelette
personne.seDeplacer(maison)


// Afficher un petit message
console.log(`${personne.nom} continuer sa recette maintenant qu'il est rentrée.`);

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage 
// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
// Afficher un message avec le nouveau mélange

personne.couper(bol.contenu);
bol.melanger()
console.log(`presque fini`);

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

poele.contenu.push(bol.contenu)
bol.contenu = ""
// Afficher un message final, notre omelette est cuite :)
poele.cuir()


















