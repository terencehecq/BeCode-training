/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target");
    let table = document.createElement('table'); // createElement est une méthode de document
    
    let nbCol = 10;
    let nbRow = 10;

    //J'initialise le tableau dans la balise target
    target.appendChild(table);

    for(let i=1; i<=nbRow;i++){ //je boucle pour créer le nb de colonnes que je veux

        let row = document.createElement('tr'); 
        // je déclare ma variable qui créée les <tr> </tr> 
            
        target.querySelector("table").appendChild(row); 
        // Je créée les balises <tr> dans le HTML

        for(let j=1; j<=nbCol;j++){ // la boucle est imbriquée dans la 1ere boucle pour créer les <td> dans chaque <tr>
            let col = document.createElement('td');
            // Je déclare la variable qui créée les <td>

            target.querySelector(`tr:nth-child(${i})`).appendChild(col); // Je créée les balises td dans le HTML
            target.querySelector(`tr:nth-child(${i})>td:nth-child(${j})`).innerHTML = i*j // Je remplis les colonnes du tableau
        }

    }
})();
