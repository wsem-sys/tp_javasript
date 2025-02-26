// fais par wsem pour diginam
// je declare mes 2 tableaux
let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];

// je crée un ensemble (Set) pour stocker les éléments uniques du premier tableau
let setArray1 = new Set(array1); 
let compteur = 0; // je crée un compteur pour stocker le nombre d'éléments en commun

// je fais une boucle pour vérifier combien d'éléments de array2 sont dans array1
for (let i = 0; i < array2.length; i++) {
    if (setArray1.has(array2[i])) { // je vérifie si l'élément est dans le set
        compteur++; // j'incrémente le compteur
    }
}

// j'affiche le nombre d'éléments en commun
console.log(`Le nombre d'éléments en commun est : ${compteur}`);
