// by wsem digi
// Je déclare une variable contenant une valeur un nombre
let valeur = 10; // je modifie cette valeur au choix

// Je initialise  la somme
let somme = 0;

// Je fais la boucle pour calculer la somme des nombres de 1 à "valeur"
for (let i = 1; i <= valeur; i++) {
    somme += i;
}

// Nous avons l'affichage du résultat ici
console.log(`La somme des nombres de 1 à ${valeur} est : ${somme}`);
