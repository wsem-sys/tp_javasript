// wsem digi tp
// Je declare le tableau
let array = [0, 1, 2, 3];

console.log("Le tableau avant rotation :", array);

// je verifie que le tableau n'est pas vide avant la rotation
if (array.length > 0) {
    let dernierElement = array.pop(); // je retire le dernier élément
    array.unshift(dernierElement); // J'ajoute au début du tableau
}

console.log("Le tableau après rotation :", array);

