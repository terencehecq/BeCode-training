/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    
    document.getElementById("run").addEventListener("click",function(){

        // L'objet Map() est un "dictionnaire" -> ensemble de clé/valeur associés 
        // Ex : 
        // var map = new Map([
            // ['prénom','Jean-mich'],
            // ['nom','Pelo'],
            // ['age' , 35]
        // ]);

        var map = new Map();

        for (var i=0; i<keys.length; i++){

            // map.set(clé,valeur) définit un objet de Map()
            map.set(keys[i],values[i]);
        }

        // Object.fromEntries() créée un objet depuis un Map() ou un Array d'arrays
        const obj = Object.fromEntries(map);

        console.log(obj);
    });

})();
