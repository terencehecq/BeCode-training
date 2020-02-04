/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    let showXman = async function(id){
        let response = await fetch('http://localhost:3000/heroes' + "/" + id);
        let xman = await response.json();
        console.log(xman);
    }


    let deleteXman = async function(id){
        let response = await fetch('http://localhost:3000/heroes' + "/" + id,{
        method:'DELETE'
        });
        let deletedXman = await response.json();
        console.log(deletedXman);
    }

    document.getElementById("run").addEventListener("click", ()=>{
        let idToDelete = document.getElementById("hero-id").value;

        showXman(idToDelete);
        deleteXman(idToDelete);
    })
})();
