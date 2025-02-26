// by wsem
// Je déclare le tableau array contenant des valeurs numérique
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// je crée un tableau arrayCopy contenant tous les élément du tableau original dans l'ordre inverse
let arrayCopy = [];
for (let i = array.length - 1; i >= 0; i--) {
    arrayCopy.push(array[i]);
}

// j'affiche les deux tableaux , le tableaux original et le tableau inversé
console.log("Tableau original :");
console.log(array);

console.log("Tableau inversé (arrayCopy) :");
console.log(arrayCopy);
