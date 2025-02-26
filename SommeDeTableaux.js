// wsem fais par le futur DEV de genie pour digni
// je declare les tableaux
let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

// je fais la création d'un tableau pour stocker la somme
let sommeTableaux = [];

// je fais une boucle pour additionner les éléments correspondants des deux tableaux
for (let i = 0; i < array1.length; i++) { //
    sommeTableaux.push(array1[i] + array2[i]); // j'ajoute la somme des éléments dans le tableau
}

// j'affichage le résultat
console.log("Tableau résultant de la somme :");
console.log(sommeTableaux);
