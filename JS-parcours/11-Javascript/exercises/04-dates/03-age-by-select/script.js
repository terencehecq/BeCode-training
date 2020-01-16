/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function calcAge(){
        var bDay = document.getElementById("dob-day").value;
        var bMonth = document.getElementById("dob-month").value;
        var bYear = document.getElementById("dob-year").value;
        var birth = (new Date(bYear,bMonth-1,bDay)).getTime();
        var now = new Date().getTime();
        
        var age = parseInt((now - birth)/31536000000); 

        alert("Vous avez " + age + " ans");

    })
})();
