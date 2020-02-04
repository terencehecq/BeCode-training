/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    // console.log(src);

    // console.log(document.querySelector("img").src);

        let img = document.querySelector("img");
        let srcO = img.src ;
        let srcHover = img.dataset.hover;

        // Au hover, je lance la fct qui a comme paramètre "e"
    document.querySelector("img").addEventListener("mouseover", () => {
        // au mouseover, je récupère la src du TARGET (sur lequel on hover)
        // et je lui attribue la valeur de srcHover dans le DOM
        img.src = srcHover;

    });

    document.querySelector("img").addEventListener("mouseleave", () =>{

        img.src = srcO;
    });

})();
