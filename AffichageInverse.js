// by wsem 
// Je déclare le tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Voici l'affichage des éléments du tableau avec une boucle
console.log("Tableau original :");
for (let i = 0; i < array.length; i++) { // je fais une boucle pour parcourir le tableau
    console.log(array[i]); //j'affiche les éléments du tableau
}

// Voici l'affichage du tableau dans l'ordre inverse
console.log("Tableau en ordre inverse :");
for (let i = array.length - 1; i >= 0; i--) { // je fais une boucle pour parcourir le tableau
    console.log(array[i]); // j'affiche les éléments du tableau dans l'ordre inverse
}

// On a la création d'une copie du tableau original
let arrayCopy = [...array];

console.log("Copie du tableau original :"); // j'affiche le tableau copié
console.log(arrayCopy);
