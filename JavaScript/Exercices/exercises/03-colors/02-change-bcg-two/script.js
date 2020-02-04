/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    // ----- Méthode 1 : -----

    // function changeBg(){
    //     var color = document.getElementById("color").value;

    //     document.body.style.backgroundColor = color;
    // }

    // document.getElementById("run").addEventListener("click", changeBg);


    //-----------

    // ----- Amélioration du code : -----

    document.getElementById("run").addEventListener("click", function changeBg(){
        var color = document.getElementById("color").value;
        document.body.style.backgroundColor = color;
    });
})();
