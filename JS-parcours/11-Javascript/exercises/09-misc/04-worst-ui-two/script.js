/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let target = document.getElementById("target");
    
    function numerotation(btnID){

        let val = document.getElementById(btnID);
        let value = parseInt(val.innerHTML);
        let max = parseInt(val.dataset.max);
        let min = parseInt(val.dataset.min);
        let newVal;

        if(value < max && btnID != "part-one"){
            newVal = value + 1;
            val.innerHTML = "0" + newVal 
        }else if(value < max && btnID == "part-one"){
            newVal = value + 1;
            val.innerHTML = newVal 
        }else{
            val.innerHTML = min;
        }

        let valOne = document.getElementById("part-one").innerHTML;
        let valTwo = document.getElementById("part-two").innerHTML;
        let valThree = document.getElementById("part-three").innerHTML;
        let valFour = document.getElementById("part-four").innerHTML;
        
        target.innerHTML = `+${valOne}${valTwo}${valThree}${valFour}`;
    }

    document.querySelectorAll("button").forEach((button)=>{
        button.addEventListener("click", ()=>{
        
        return numerotation(button.id); 
        // On lance la fct numerotation() avec comme paramètre l'id du bouton cliqué
        
        })  
    })
        
})();
