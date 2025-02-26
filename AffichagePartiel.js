// by wsem digi
// Je declare le tableau contenant toute les valeurs
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
// 
console.log(" Les entiers supérieurs à 3 :");
for (let i = 0; i < array.length; i++) { // je fais une boucle pour parcourir le tableau
    if (array[i] > 3) { // je fais une condition pour afficher les valeurs supérieur à 3
        console.log(array[i]); // j'affiche les valeurs supérieur à 3
    }
}
//J'affiche les entiers pairs
console.log("voici les entiers pairs :");
for (let i = 0; i < array.length; i++) { // je fais une boucle pour parcourir le tableau
    if (array[i] % 2 === 0) { // je fais une condition pour afficher les valeurs pairs
        console.log(array[i]);// j'affiche les valeurs pairs
    }
}
//j'affiche les entiers aux index pairs
console.log("voici les valeur aux index pairs :");
for (let i = 0; i < array.length; i += 2) {// je fais une boucle pour parcourir le tableau
    console.log(array[i]); // j'affiche les valeurs aux index pairs
}
//j'affiche les entiers impairs
console.log("Voila les entiers impairs :");
for (let i = 0; i < array.length; i++) {// je fais une boucle pour parcourir le tableau
    if (array[i] % 2 !== 0) {// je fais une condition pour afficher les valeurs impairs
        console.log(array[i]);// j'affiche les valeurs impairs
    }
}
