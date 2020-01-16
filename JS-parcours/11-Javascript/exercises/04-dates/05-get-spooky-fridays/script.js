/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function(){

    var year = document.getElementById("year").value;

    var list = [];
    var arrMonth=["janvier", "février", "mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

    for (var i=0; i<12;i++){
        var month = new Date(year,i,13);
        var day = month.getDay();
        
        if (day == 5){
            var show = arrMonth[month.getMonth()];
            list.push(" " + show);
        }
    }
    alert(list);
});
})();
