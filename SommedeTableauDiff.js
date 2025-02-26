// fais par wsm le dev de genie pour dignam
// je declare les tableaux
let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, 0, 18];

// je trouve la taille du plus grand tableau
let maxLength = Math.max(array1.length, array2.length);

// je fais la création d'un tableau pour stocker la somme
let sommeTableaux = [];

// je fais la boucle pour additionner les éléments des deux tableaux en tenant compte de la différence de taille
for (let i = 0; i < maxLength; i++) {
    let val1 = i < array1.length ? array1[i] : 0;
    let val2 = i < array2.length ? array2[i] : 0;
    sommeTableaux.push(val1 + val2);
}

// j'affiche le résultat
console.log("Tableau résultant de la somme avec tailles différentes :");
console.log(sommeTableaux);
