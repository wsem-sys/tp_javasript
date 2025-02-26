// by wsem by me for digi
// Je declare un tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

//  je fais initialisation de la variable max avec la première valeur du tableau
let max = array[0];

// je parcours mon tableau pour trouver le maximum
for (let i = 1; i < array.length; i++) { // je fais une boucle pour parcourir le tableau
    if (array[i] > max) {  // je fais une condition pour trouver
        max = array[i];  // je stocke la valeur max
    }
}

// j'affiche le plus grand nombre du tableau
console.log(`Le plus grand élément du tableau est : ${max}`);
