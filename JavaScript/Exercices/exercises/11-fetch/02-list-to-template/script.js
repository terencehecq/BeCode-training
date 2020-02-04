/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    
    // console.log(template);
    document.getElementById("run").addEventListener("click", async ()=>{ // fonction asynchrone pour récupérer des données
        
        try{
            let response = await fetch("http://localhost:3000/heroes"); // On attend de récupérer le fetch du localhost qui renvoie une 'response'
            let xmen = await response.json(); // on transforme la response du fetch en json
            console.log(xmen); // on affiche les valeurs}

            let template = document.querySelector("#tpl-hero").cloneNode(true); // je stock dans 'template' un clone du noeud #tpl-hero (voir html)

            for(let i=0; i<xmen.length; i++){

                let clone = document.importNode(template.content, true); // J'importe le contenu du noeud dans la variable 'clone'
                document.getElementById("target").appendChild(clone); // Je créée dans la balise 'target' le code HTML de 'clone'
                
                let name = document.querySelector(`.hero:nth-child(${i+1})>.title>.name`) // Sélectionner les bonnes balises
                let alterEgo = document.querySelector(`.hero:nth-child(${i+1})>.title>.alter-ego`)
                let powers = document.querySelector(`.hero:nth-child(${i+1})>.powers`)

                name.innerHTML = xmen[i].name + ' (id: ' + xmen[i].id + ')'; // Insérer le contenu de chaque xmen du tableau dans les balises 
                alterEgo.innerHTML = xmen[i].alterEgo;
                powers.innerHTML = xmen[i].abilities;
            }
        } catch(e){
            console.log(e);
        }

        
    })
})();
