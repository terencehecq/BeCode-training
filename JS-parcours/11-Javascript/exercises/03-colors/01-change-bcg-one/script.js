/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const page = document.body;

    const changeColor = color => {
        // perform the operation
        
        
        switch(color){
            case "red":
                page.style.backgroundColor = "red";
                break;
            case "green":
                page.style.backgroundColor = "green";
                break;
            case "yellow":
                page.style.backgroundColor = "yellow";
                break;
            case "blue":
                page.style.backgroundColor = "blue";
                break;
        };
    };

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (changeColor($btn.id), false),
        ),
    );
})();
