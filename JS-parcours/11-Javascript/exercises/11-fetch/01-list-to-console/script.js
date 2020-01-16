/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async ()=>{ // fonction asynchrone pour récupérer des données
        
        try{
            let response = await fetch("http://localhost:3000/heroes"); // On attend de récupérer le fetch du localhost qui renvoie une 'response'
            let xmen = await response.json(); // on transforme la response du fetch en json
            console.log(xmen); // on affiche les valeurs}
            
            // Rajout personnel
            xmen.forEach((hero)=>{
                console.log(hero.name);
            })
        
        } catch(e){
            console.log(e);
        }
    })
})();
