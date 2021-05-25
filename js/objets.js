// Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
// >>- nom
// >>- lieu
// >>- argent
// >>- mainDroite
// >>- ( du coup main gauche)
// >>- seDeplacer(lieu)
// >>- payerArticle(article)
// >>- couper(ingredient, outil)

let personne = {
    nom: "Agim",
    lieu: "",
    argent: "50",
    mainDroite: "",
    mainGauche: "",
    seDeplacer(endroit) {

    },
    payerArticle() {

    },
    couper(le) {

    }
}

// Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
let maison = {
    nom: " la maison",
    personnes: [],
}

// Créer un outil (couteau) pour découper les ingrédients achetés
// >- propriétés : nom et action.
// >- action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
let couteau = {
    nom: "couteau",
    action: "coupé",
}


// Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
// >- attributs : nom, etats ( entier,coupé, moulu), prix



// Créer un lieu "epicerie" qui a comme propriétés :
// >- nom, personnes = [], paniers (plusieurs objets paniers avec le type de panier et le contenu du panier),
// >- Les "ingrédients" créés juste au dessus contenus dans un tableau.
let epicerie = {
    nom: "l'épicerie",
    personnes: [],
    ingredients: [oignon, oeuf, epice, fromage],
    panier: [
        panier1 = {
            nom: "panier1",
            contenu: []
        },
        panier2 = {
            nom: "panier2",
            contenu: []
        }
    ],

}

// Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
let poele = {
    contenu: [],
    cuir() {

    },

}


// Créer un bol avec un tableau comme contenu
// >- ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

let bol = {
    contenu: [],
    mixer() {

    },
    melanger() {

    },
},