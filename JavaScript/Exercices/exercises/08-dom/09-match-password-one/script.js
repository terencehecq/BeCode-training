/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        let mdp1 = document.getElementById("pass-one").value;
        let mdp2 = document.getElementById("pass-two").value;

        if(mdp1 == "" || mdp2 == ""){
            alert("Veuillez entrer 2 mots de passe");
        }else if(mdp1 === mdp2){
            document.getElementById("pass-one").style.borderColor = "green";
            document.getElementById("pass-two").style.borderColor = "green";
            document.getElementById("pass-one").style.backgroundColor = "rgba(155, 206, 127,0.4)";
            document.getElementById("pass-two").style.backgroundColor = "rgba(155, 206, 127,0.4)";
        } else{
            document.getElementById("pass-one").style.borderColor = "#cc0000";
            document.getElementById("pass-two").style.borderColor = "#cc0000";
            document.getElementById("pass-one").style.backgroundColor = "rgba(207, 85, 83,0.3)";
            document.getElementById("pass-two").style.backgroundColor = "rgba(207, 85, 83,0.3)";
        }

    });
})();
