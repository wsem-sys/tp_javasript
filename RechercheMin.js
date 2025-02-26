//fait par wsem pour diginam
// je declare un tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// je initialise la variable min avec la première valeur du tableau
let min = array[0];

// je fais le parcrous du tableau pour trouver le minimum
for (let i = 1; i < array.length; i++) { // je fais une boucle pour parcourir le tableau
    if (array[i] < min) {  // je fais une condition pour trouver le minimum
        min = array[i]; // je stocke la valeur min
    }
}

// je fais l'affichage du plus petit élément
console.log(`Le plus petit élément du tableau est : ${min}`);
