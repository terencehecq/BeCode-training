/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const insertXman = async function(data){
        let response = await fetch('http://localhost:3000/heroes', {
            method : 'POST', // méthode pour poster en ligne
            headers : {
                'Content-type' : 'application/json' // Le contenu est uploadé en JSON
            },
            body: JSON.stringify(data) // Transformer le 'data' entré en paramètre en JSON
        })
        let xman = await response.json() // Pour récupérer la  réponse et la retransformer en objet pour l'afficher
        console.log(xman)
    }

    let newXman = {};

    document.getElementById("run").addEventListener("click", ()=>{
        newXman.name = document.getElementById("hero-name").value;
        newXman.alterEgo = document.getElementById("hero-alter-ego").value;
        newXman.abilities = document.getElementById("hero-powers").value.split(',');

        // console.log(newXman);

        if(newXman.name == ""||newXman.alterEgo ==""||newXman.abilities[0]==""){
            alert("Veuillez remplir tous les champs !")
        }else{
            insertXman(newXman);

            alert(`Name: ${newXman.name}\n\n Alter Ego: ${newXman.alterEgo}\n\n Powers: ${newXman.abilities}`);

            document.getElementById("hero-name").value = "";
            document.getElementById("hero-alter-ego").value = "";
            document.getElementById("hero-powers").value = "";
        }
    })

})();
