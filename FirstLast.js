// fais par wsem digi
// Je declare un tableau d'entiers
let array = [11, 15, 8, 0, 9, 7, 2, 1, 87,11];

// je vérifie la condition : 
//  le tableau doit contenir au moins un élément
//  le premier et le dernier élément doivent être identiques
let premierEgalDernier = array.length > 0 && (array[0] === array[array.length - 1]);

// j'affiche le résultat
console.log(`Le premier et le dernier élément du tableau sont identiques ? ${premierEgalDernier}`);
