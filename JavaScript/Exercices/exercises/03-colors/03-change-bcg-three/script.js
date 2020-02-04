/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click",function randomColor(){
        var randomNum1 = parseInt(Math.random()*255);
        var randomNum2 = parseInt(Math.random()*255);
        var randomNum3 = parseInt(Math.random()*255);
        var color = "rgb("+randomNum1+","+randomNum2+","+randomNum3+")";
        console.log(color);

        document.body.style.backgroundColor =color;
    })
})();
