// by wsem
// Je déclare une variable contenant une valeur un nombre
let valeur = 10; // je modifie cette valeur au choix

// Je initialise  la somme
let somme = 0;

// Je fais la boucle pour calculer la somme des nombres de 1 à "valeur"
for (let i = 1; i <= valeur; i++) {
    somme += i;
}

// je fais l'affichage du résultat
console.log(`La somme des nombres de 1 à ${valeur} est : ${somme}`);
