const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const number = ["0", "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
const mail = ["-" , "." , "@" , "_"];
const newTable = [...alphabet , ...number , ...mail]

let username = document.getElementById("name").value;
let userPhoneNumber = document.getElementById("phone").value;
let emailUser = document.getElementById("email").value;

// Étape 1 : le But de la Fonction
// •	Objectif : Créer une fonction testAlpha qui vérifie si chaque caractère d'une chaîne de caractères (chaine) est présent dans un ensemble spécifié de caractères (alphabet).
// •	Résultat attendu : La fonction doit renvoyer true si tous les caractères de chaine sont dans alphabet, sinon elle doit renvoyer false.
// Étape 2 : Débuter la Définition de la Fonction
// •	Commencez par déclarer la fonction testAlpha qui prend un paramètre chaine.

// Étape 3 : Parcourir la Chaîne de Caractères (for)
// •	Utilisez une boucle for pour parcourir chaque caractère de chaine.

// Étape 4 : Vérifier la Présence des Caractères (includes)
// •	À l'intérieur de la boucle, vérifiez si le caractère actuel (chaine[i]) n'est pas dans alphabet (un ensemble de caractères autorisés).

// Étape 5 : Retourner false si un Caractère n'est pas dans alphabet (false)
// •	Si un caractère de chaine n'est pas trouvé dans alphabet, retournez false.

// Étape 6 : Retourner true si Tous les Caractères sont Validés (true)
// •	Si la boucle se termine sans trouver de caractère hors d’alphabet, cela signifie que tous les caractères sont valides. Donc, retournez true à la fin de la fonction.
// Pensez à utiliser des console.log() pour debugger votre function et voir vos étapes, en appelant toujours la fonction une fois déclarer exemple.

function testAlpha (input , arrayCompare) {
    for (let i = 0; i < input.length; i++) {
        //On test si la valeur saisie par l'utilisateur est vraie ou fausse
        if (arrayCompare.includes(input[i]) === false){
            //Si la condition est remplie on renvoie false
            return false
        }
    }
    //Si la condition du if n'est pas remplie on renvoie true
    return true
};

console.log(testAlpha(username , newTable));
console.log(testAlpha(userPhoneNumber , newTable));
console.log(testAlpha(emailUser , newTable));
