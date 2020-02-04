/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("pass-one").addEventListener("keyup", (e)=>{

        let numCount = 0;
        let mdp = document.getElementById("pass-one").value;

        for (let i=0; i<=mdp.length; i++){

            if(mdp.charCodeAt(i) >=48 && mdp.charCodeAt(i)<=57){
                numCount = numCount + 1 ;
            }
        }

        if(mdp.length >=8 && numCount >=2 ){
            document.getElementById("validity").innerHTML = "Ok";
        } else{
            document.getElementById("validity").innerHTML = "Pas ok";
        }

    })
})();
