/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let template = document.querySelector("#tpl-hero").cloneNode(true); // je stock dans 'template' un clone du noeud #tpl-hero (voir html)

    let clone = document.importNode(template.content, true); // J'importe le contenu du noeud dans la variable 'clone'
    document.getElementById("target").appendChild(clone); // Je créée dans la balise 'target' le code HTML de 'clone'

    document.getElementById("run").addEventListener("click", ()=>{ 
        

        let i = parseInt(document.getElementById("hero-id").value);

        async function showXmen(){ // fonction asynchrone pour récupérer des données
            try{
                let response = await fetch("http://localhost:3000/heroes"); // On attend de récupérer le fetch du localhost qui renvoie une 'response'
                let xmen = await response.json(); // on transforme la response du fetch en json
                
                let name = document.querySelector(`.hero>.title>.name`) // Sélectionner la bonne balises 
                let alterEgo = document.querySelector(`.hero>.title>.alter-ego`)
                let powers = document.querySelector(`.hero>.powers`)

                name.innerHTML = xmen[i].name; // Insérer le contenu de chaque xmen du tableau dans les balises 
                alterEgo.innerHTML = xmen[i].alterEgo;
                powers.innerHTML = xmen[i].abilities;

            } catch(e){
                console.log(e);
            }
        }
        showXmen();
        
    })
        
})();
