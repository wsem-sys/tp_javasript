// by wsem 
// Déclaration du tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Affichage des éléments du tableau avec une boucle
console.log("Tableau original :");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Affichage du tableau dans l'ordre inverse
console.log("Tableau en ordre inverse :");
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// Création d'une copie du tableau
let arrayCopy = [...array];

console.log("Copie du tableau original :");
console.log(arrayCopy);
