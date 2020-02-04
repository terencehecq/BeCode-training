/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    function printDate(){
        var arrJours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
        var arrMois = ["janvier", "février", "mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

        var jour = arrJours[(new Date().getDay())-1];
        var date = new Date().getDate();
        var mois = arrMois[new Date().getMonth()];
        var annee = new Date().getFullYear();
        var heure = new Date().getHours();
        var min = new Date().getMinutes();

        var now = jour + " " + date + " " + mois + " " + annee + ", " + heure + "h" + min;

        document.getElementById("target").innerHTML = now;
    }
    setInterval(printDate, 5000);
})();
