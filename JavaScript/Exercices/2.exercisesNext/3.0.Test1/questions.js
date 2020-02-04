/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte.charAt(6);
}
let afficher9Car =  (texte) => {
    let array = texte.split(' ');
    return array[0] + " " + array[1];
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    if(typeof texte == 'string'){
        return true;
    }
}

let AfficherExtensionString =  (texte) => {
    return texte.split('.')[1]
}
let NombreEspaceString =  (texte) => {
    return texte.split(' ').length-1
}
let InverseString =  (texte) => {
    let abc = texte.split('');
    let def = texte.split('');

    for(let i=0;i<abc.length;i++){
        abc[i] = def[abc.length-i-1]
    }
    return abc.join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    
    for(let i=0;i<array.length;i++){
        array[i] = Math.abs(array[i]);
    }
    return array

}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI*Math.pow(rayon,2));
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(Math.pow(ab,2) + Math.pow(ac,2))
}
let calculIMC =  (poids, taille) => {
    return Math.round(poids/Math.pow(taille,2)*100)/100;
}
