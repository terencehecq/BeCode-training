/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let text = document.getElementById("target").innerHTML;
    let letters = [...text];

    
    for(let i=0;i<letters.length; i++){
        letters[i] = `<span style="visibility:hidden">${letters[i]}</span>`;
    }

    document.getElementById("target").innerHTML = letters.join('');

    let count = 1;
   
    function typeLetters(){
        
        if(count <= letters.length){
            let random = 50+ parseInt(Math.random()*200);

            document.querySelector(`#target span:nth-child(${count})`).style.visibility = "visible";
        
            setTimeout(typeLetters, random);
            count++
        }
        else{
            // clearTimeout(typeLetters); 
            // Pas besoin de Clear car boucle dans le if, quand on en sort, la fonction setTimeout s'arrête
            console.log("C'est fini");
        } 
    }

    typeLetters();
})();
