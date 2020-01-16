/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    
    document.getElementById("run").addEventListener("click", function(){
        const numbers = [];
        var sum = 0;
        var min = 100;
        var max = 0;

        for(var i=0; i<10;i++){
            var num = parseInt(Math.random()*100);
            document.getElementById("n-"+(i+1)).innerHTML = num;
            numbers.push(num);
            sum = sum + num;

            if(num<min){
                min = num;
            };
            if(num>max){
                max = num;
            };
        };

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum/numbers.length;
        
    })
})();
