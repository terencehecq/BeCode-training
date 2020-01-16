/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    function infosQuery(){
        var age=prompt("Quel age avez-vous?");
        var sexe=prompt("Quel est votre sexe? (M/F/NB)");
        var ville=prompt("De quelle ville venez-vous?");

        var conf=prompt("Ces informations sont-elles correctes? \n\n" + "Age: "+ age + ", Sexe: " + sexe + ", Ville: " + ville + "\n\nSi oui, confirmez avec 'OK'.");

        if(conf==""||conf=="OK"||conf=="ok"||conf=="Ok"){
            return alert("Merci !");
        } else{
            infosQuery();
        };
    };

    infosQuery();

})();
