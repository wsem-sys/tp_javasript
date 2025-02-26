// by wsem
// Déclaration d'une variable contenant une valeur numérique entière
let valeur = 10; // Modifier cette valeur selon les besoins

// Initialisation de la somme
let somme = 0;

// Boucle pour calculer la somme des nombres de 1 à "valeur"
for (let i = 1; i <= valeur; i++) {
    somme += i;
}

// Affichage du résultat
console.log(`La somme des nombres de 1 à ${valeur} est : ${somme}`);
