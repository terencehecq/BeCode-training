/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let text = document.getElementById("target").innerHTML ;

    let textArray = [...text]

    let sizes = ['xx-small','x-small', 'small', 'medium','large','x-large','xx-large'];
    let waves = [...sizes,...sizes.reverse()];
    
    let wavesCount = 0;
    let i =0;

    // for(let i=0; i<textArray.length; i++){
    let interval = setInterval(()=>{
        
        textArray[i] = `<span style="font-size: ${waves[wavesCount]}">${textArray[i]}</span>`;

        wavesCount += 1;

        if(wavesCount >= waves.length){
            wavesCount = 0;
        }

        document.getElementById("target").innerHTML = textArray.join('');
        
        i++
        if(i == textArray.length){
            clearInterval(interval)
        }
    }, 100);

    


    
})();
