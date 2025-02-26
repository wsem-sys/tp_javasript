// Fais Wsem pour digi
// je declare un tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// je initialise des variables
let somme = 0;
let nombreElements = array.length;

// Je fais une boucle pour calculer la somme des éléments
for (let i = 0; i < nombreElements; i++) {
    somme += array[i];
}

// je fais le calcul de la moyenne
let moyenne = somme / nombreElements;

// j'affiche le résultat
console.log(`La moyenne des éléments du tableau est : ${moyenne}`);
