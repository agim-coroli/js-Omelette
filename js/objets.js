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
        this.lieu = endroit;
        console.log(`${this.nom} est à ${endroit.nom}`);
    },
    payerArticle() {
        for (let i = 0; i < this.mainDroite.contenu.length; i++) {
            this.argent = this.argent - this.mainDroite.contenu[i].prix
        }
    },
    couper(le) {
        for (let i = 0; i < bol.contenu.length; i++) {
            if (le[i].etat != "entier") {
                console.log(`${le[i].nom} est déjà coupé`);
            } else {
                le[i].etat = "coupé"
                console.log(`${le[i].nom} a été coupé avec la main droite`);
            }
        }
        this.mainDroite = ""
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





// Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
let poele = {
    contenu: [],
    cuir() {
        setTimeout(()=>{
            this.contenu.push()
            this.contenu.etat = "cuite"
            console.log(`L'omelette est ${this.contenu.etat}`);
        },4000)
    },

}


// Créer un bol avec un tableau comme contenu
// >- ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

let bol = {
    contenu: [],
    mixer() {
        for (let i = 0; i < personne.mainDroite.contenu.length; i++) {
            this.contenu.push(personne.mainDroite.contenu[i])
            console.log(`J'ai mis ${personne.mainDroite.contenu[i].nom} dans le bol`);
        }
        personne.mainDroite.contenu.splice(0, personne.mainDroite.contenu.length)
        console.log(`mon panier est vide: ${personne.mainDroite.contenu}`);
    },
    melanger() {
        for (let i = 0; i < this.contenu.length; i++) {
            if (this.contenu[i].etat == "coupé" || this.contenu[i].etat == "moulu") {
                var newMelange = {
                    nom: "Omelette",
                    etat: "non cuite"
                }
            } else {
            }
            console.log(`J'ai maintenant dans mon bol une ${newMelange.nom} mais elle est ${newMelange.etat}`);
            this.contenu = newMelange
        }
    },
}

export {personne, maison, couteau, poele, bol}