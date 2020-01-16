/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
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
    
    let nbCol = 1;
    let nbRow = 10;

    //J'initialise le tableau dans la balise target
    target.appendChild(table);

    for(let i=1; i<=nbRow;i++){ //je boucle pour créer le nb de colonnes que je veux

    let row = document.createElement('tr');
            
        target.querySelector("table").appendChild(row);

        for(let j=1; j<=nbCol;j++){
            let col = document.createElement('td');
            target.querySelector(`tr:nth-child(${i})`).appendChild(col);
        }

    }


    

    // let table ='';
    // let rows = 10;
    // let cols = 1;

    // for(var r = 0; r<rows;r++){
    //     table = table + '<td>'
    // }
})();
