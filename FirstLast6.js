// fais par wsem
// je declare un tableau contenant des entiers
let array = [6, 10, -1, 0, 9, 2, 4, -2, 41, 6];

// je verifie la condition : 
// - le tableau doit avoir au moins un élément
// - le premier ou le dernier élément doit être égal à 6
let contientSix = array.length > 0 && (array[0] === 6 || array[array.length - 1] === 6);

// j'affiche le résultat (true si la condition est respectée, false sinon)
console.log(`Le tableau commence ou finit par 6 ? ${contientSix}`);
